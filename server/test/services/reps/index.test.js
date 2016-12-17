'use strict';

const assert = require('assert');
const congress = require('../../../src/services/lib/congress');
const states = require('../../../src/services/lib/states');

//const app = require('../../../src/app');

describe('reps service', function() {
  it('registered the reps service', () => {
    //assert.ok(app.service('reps'));
  });
});

describe('congress service', function() {
  it('finds reps by geo point', function(done) {
    this.timeout(10000);
    const lat = 37.540842;
    const lon = -77.483460;
    congress.findRepsByPoint(lat, lon, function (err, res, body) {
      assert.ok(!err, "Request returned an error: " + err);
      assert.ok(res, "Response is empty");
      assert.equal(res.statusCode, 200, "Error status code");
      assert.ok(body.results, "No results key");
      assert.equal(body.count, 3, "Wrong number of results");

      var chambers = body.results.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.senate, 2, "Wrong number of senators");
      assert.equal(chambers.house, 1, "Wrong number of representatives");
      done();
    });
  });

  it('finds reps by zip', function(done) {
    this.timeout(10000);
    const zip = 23219;
    congress.findRepsByZip(zip, function (err, res, body) {
      assert.ok(!err, "Request returned an error: " + err);
      assert.ok(res, "Response is empty");
      assert.equal(res.statusCode, 200, "Error status code");
      assert.ok(body.results, "No results key");
      assert.equal(body.count, 3, "Wrong number of results");

      var chambers = body.results.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.senate, 2, "Wrong number of senators");
      assert.equal(chambers.house, 1, "Wrong number of representatives");
      done();
    });
  });
});

describe('states service', function() {
  it('finds reps by geo point', function(done) {
    this.timeout(10000);
    const lat = 37.540842;
    const lon = -77.483460;
    states.findRepsByPoint(lat, lon, function (err, res, body) {
      assert.ok(!err, "Request returned an error: " + err);
      assert.ok(res, "Response is empty");
      assert.equal(res.statusCode, 200, "Error status code");
      assert.equal(body.length, 2, "Wrong number of results");

      var chambers = body.reduce(function(p,c) {
        p[c.chamber] = (p[c.chamber] || 0) + 1;
        return p;
      }, {});

      assert.equal(chambers.upper, 1, "Wrong number in upper chamber");
      assert.equal(chambers.lower, 1, "Wrong number in lower chamber");
      done();
    });
  });
});
