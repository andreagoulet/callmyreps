'use strict';

const assert = require('assert');
const request = require('request');

describe('scripts service', function() {
  it('creates scripts', function(done) {
    var baseRequest = request.defaults({
      url: 'http://localhost:3030/scripts',
      json: true,
      method: 'POST'
    });

    var opts1 = {
      body: {
        title: 'A script to protect bunnies',
        issue: 'Animal welfare',
        text: 'Please think of the bunnies.'
      }  
    };

    baseRequest.post(opts1, function(err,res,body) {
        assert.equal(body.title, opts1.body.title);
        assert.equal(body.issue, opts1.body.issue);
        assert.equal(body.text, opts1.body.text);
        assert.ok(body._id);
        assert.ok(body.createdAt);
        assert.ok(body.updatedAt);
      });

    var opts2 = {
      body: {
        title: 'A script to protect foxes',
        issue: 'Animal welfare',
        text: 'Please think of the foxes.'
      } 
    };
    
    baseRequest.post(opts2, function(err,res,body) {
        assert.equal(body.title, opts2.body.title);
        assert.equal(body.issue, opts2.body.issue);
        assert.equal(body.text, opts2.body.text);
        assert.ok(body._id);
        assert.ok(body.createdAt);
        assert.ok(body.updatedAt);
        done();
      });
   });
});
