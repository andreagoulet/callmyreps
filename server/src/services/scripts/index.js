'use strict';

const service = require('feathers-mongoose');
const scripts = require('./scripts-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: scripts,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/scripts', service(options));

  // Get our initialize service to that we can bind hooks
  const scriptsService = app.service('/scripts');

  // Set up our before hooks
  scriptsService.before(hooks.before);

  // Set up our after hooks
  scriptsService.after(hooks.after);
};
