const baseApiRequest = require('./baseApiRequest');

// retrieve congress info from Sunlight Congress API.
// Sunlight foundation no longer maintains the project
// and API keys are temporarily not required as they are
// transitioning it to ProPublica.

// https://sunlightlabs.github.io/congress/legislators.html

const locationEndpoint = 'https://congress.api.sunlightfoundation.com/legislators/locate';

const baseRequest = baseApiRequest(locationEndpoint);

function findRepsByPoint(latitude, longitude) {
    return baseRequest.get({
        qs: {
            latitude: latitude,
            longitude: longitude
        }
    });
};

function findRepsByZip(zip) {
    return baseRequest.get({
        qs: {
            zip: zip
        }
    });
}

module.exports = {
    findRepsByPoint: findRepsByPoint,
    findRepsByZip: findRepsByZip
};