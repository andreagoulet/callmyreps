'use strict';

const errors = require('feathers-errors');
const _ = require('lodash');
const hooks = require('./hooks');
const congress = require('../lib/congress');
const states = require('../lib/states');

const docs = {
  description: 'Contact info for government representatives. Powered by the Sunlight API.',
  definitions: {
    RepContactInfo: {
      type: 'object',
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        },
        party: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        state_name: {
          type: 'string'
        },
        title: {
          type: 'string'
        },
        district: {
          type: 'string'
        },
        level: {
          type: 'string',
          enum: [ 'federal', 'state' ]
        },
        phones: {
          type: 'object',
          additionalProperties: {
            type: 'string'
          }
        },
        gender: {
          type: 'string'
        },
        phone: {
          type: 'string'
        }
      }
    }
  },
  find: {
    description: 'Find representatives\' contact info for a given location.',
    parameters: [{
      name: 'latitude',
      type: 'number',
      format: 'float',
      in: 'query',
      required: 'true',
      description: 'Latitude of location. Example: 37.5395',
      minimum: -90,
      maximum: 90
    },{
      name: 'longitude',
      type: 'number',
      format: 'float',
      in: 'query',
      required: 'true',
      description: 'Longitude of location. Example: -77.4773',
      minimum: -180,
      maxiumum: 180
    }],
    responses: {
      "200": {
        description: "a list of representatives",
        schema: {
          type: 'array',
          items: {
            "$ref": "#/definitions/RepContactInfo"
          }
        }
      },
      default: {
        description: "Unexpected error"
        // TODO: schema
      }
    }
  }
};

class Service {
  constructor(options) {
    this.options = options || {};
  }

  /**
   * Finds federal and state reps for a location.
   * Combines data from two Sunlight APIs.
   * 'latitude' and 'longitude' params are required.
   */
  find(params) {
    var lat, long;
    if (!params.query.latitude || !params.query.longitude ||
      isNaN(lat = parseFloat(params.query.latitude)) ||
      isNaN(long = parseFloat(params.query.longitude))) {
        throw new errors.BadRequest('Please provide a valid latitude and longitude');
    }

    // properties of the rep to return, all others will be discarded
    const props = ['chamber', 'first_name', 'last_name', 'gender',
                  'party', 'phone', 'state', 'state_name', 'title',
                  'level', 'district'];

    return Promise.all([congress.findRepsByPoint, states.findRepsByPoint]
      .map(function(f) {
        return f(lat, long);
      }))
      .then(function(results) {

        // federal results
        var reps = results[0].results.map(function(rep) {
          var outRep = _.pick(rep, props);
          outRep.level = outRep.level || 'federal';
          return outRep;
        });

        // state results
        reps = reps.concat(results[1].map(function(rep) {
          var outRep = _.pick(rep, props);
          outRep.level = outRep.level || 'state';
          outRep.phones = rep.offices.reduce(function(p,c,i) {
            if (c.phone) {
              var type = c.type || "phone"+i;
              p[type] = c.phone;
            }
            return p;
          }, {});
          return outRep;
        }));

        // standardize some things
        reps.forEach(function(rep) {
          if (rep.state) { rep.state = rep.state.toUpperCase(); }
          if (['D', 'Democratic'].includes(rep.party)) { rep.party = 'D'; };
          if (['R', 'Republican'].includes(rep.party)) { rep.party = 'R'; };
          if (['I', 'Independent'].includes(rep.party)) { rep.party = 'I'; };
          if (rep.district) { rep.district = rep.district.toString(); };
        });

        return reps;
      });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/reps', Object.assign(new Service(), { docs }));

  // Get our initialize service to that we can bind hooks
  const repsService = app.service('/reps');

  // Set up our before hooks
  repsService.before(hooks.before);

  // Set up our after hooks
  repsService.after(hooks.after);
};

module.exports.Service = Service;
