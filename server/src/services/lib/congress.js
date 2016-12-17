const baseApiRequest = require('./baseApiRequest');

// retrieve congress info from Sunlight Congress API.
// Sunlight foundation no longer maintains the project
// and API keys are temporarily not required as they are
// transitioning it to ProPublica.

// https://sunlightlabs.github.io/congress/legislators.html

const locationEndpoint = 'https://congress.api.sunlightfoundation.com/legislators/locate';

const baseRequest = baseApiRequest(locationEndpoint);

function findRepsByPoint(latitude, longitude, callback) {
    baseRequest.get({
        qs: {
            latitude: latitude,
            longitude: longitude
        }
    }, callback);
};

function findRepsByZip(zip, callback) {
    baseRequest.get({
        qs: {
            zip: zip
        }
    }, callback);
}

module.exports = {
    findRepsByPoint: findRepsByPoint,
    findRepsByZip: findRepsByZip
};