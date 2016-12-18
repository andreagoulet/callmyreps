const request = require('request-promise');

// base request used by both congress and states APIs

module.exports = function(endpoint) {
    return request.defaults({
        url: endpoint,
        method: 'GET',
        json: true
    });
};