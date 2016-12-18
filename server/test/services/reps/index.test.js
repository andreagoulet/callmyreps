'use strict';

const assert = require('assert');
const congress = require('../../../src/services/lib/congress');
const states = require('../../../src/services/lib/states');
const rp = require('request-promise');

//const app = require('../../../src/app');

describe('reps service', function() {
  it('registered the reps service', () => {
    //assert.ok(app.service('reps'));
  });

  it('returns reps for a location', function(done) {
    this.timeout(10000);
    rp({
      url: 'http://localhost:3030/reps',
      qs: {
        latitude: 37.540842,
        longitude: -77.48346
      },
      json: true
    }).then(function(data) {
      assert.ok(data, 'No response data');
      assert.ok(data.length > 3, 'Not enough results');
      assert.equal(data[0].level, 'federal', 'Missing federal results');
      assert.equal(data[data.length - 1].level, 'state', 'Missing state results');
    }).catch(function(err) {
      assert.fail(err);
    }).finally(done);
  });

});

describe('congress service', function() {
  it('finds reps by geo point', function(done) {
    this.timeout(10000);
    const lat = 37.540842;
    const lon = -77.483460;
    congress.findRepsByPoint(lat, lon)
    .then(function(body) {
      assert.ok(body.results, "No results key");
      assert.equal(body.count, 3, "Wrong number of results");

      var chambers = body.results.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.senate, 2, "Wrong number of senators");
      assert.equal(chambers.house, 1, "Wrong number of representatives");
    }).catch(function(err) {
      assert.fail(err);
    }).finally(done);
  });

  it('finds reps by zip', function(done) {
    this.timeout(10000);
    const zip = 23219;
    congress.findRepsByZip(zip)
    .then(function(body) {
      assert.ok(body.results, "No results key");
      assert.equal(body.count, 3, "Wrong number of results");

      var chambers = body.results.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.senate, 2, "Wrong number of senators");
      assert.equal(chambers.house, 1, "Wrong number of representatives");
    }).catch(function(err) {
      assert.fail(err);
    }).finally(done);
  });
});

describe('states service', function() {
  it('finds reps by geo point', function(done) {
    this.timeout(10000);
    const lat = 37.540842;
    const lon = -77.483460;
    states.findRepsByPoint(lat, lon)
    .then(function(body) {
      assert.equal(body.length, 2, "Wrong number of results");

      var chambers = body.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.upper, 1, "Wrong number in upper chamber");
      assert.equal(chambers.lower, 1, "Wrong number in lower chamber");
    }).catch(function(err) {
      assert.fail(err);
    }).finally(done);
  });
});
