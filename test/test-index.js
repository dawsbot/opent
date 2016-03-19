import test from 'ava';
const opent = require('../index.js');

test('package - valid args', t => {
  t.throws(() => {
    opent(false);
  }, TypeError);
  t.throws(() => {
    opent('user', false);
  }, TypeError);
});

test('package - basic url building', t => {
  t.is(opent('dawsonbotsford', 'test-package'), 'https://travis-ci.org/dawsonbotsford/test-package');
  t.is(opent('dawsonbotsford', 'test_package'), 'https://travis-ci.org/dawsonbotsford/test_package');
});
