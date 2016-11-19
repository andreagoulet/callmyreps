'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('scripts service', function() {
  it('registered the scripts service', () => {
    assert.ok(app.service('scripts'));
  });
});
