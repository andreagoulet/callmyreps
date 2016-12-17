const baseApiRequest = require('./baseApiRequest');

// retrieve state rep info from Sunlight OpenStates API

// https://sunlightlabs.github.io/openstates-api/legislators.html

const locationEndpoint = 'https://openstates.org/api/v1/legislators/geo/';

const baseRequest = baseApiRequest(locationEndpoint);

function findRepsByPoint(latitude, longitude, callback) {
    baseRequest.get({
        qs: {
            lat: latitude,
            long: longitude
        }
    }, callback);
};

module.exports = {
    findRepsByPoint: findRepsByPoint
};