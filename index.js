'use strict';
module.exports = function (userName, packageName) {
  // validate arguments
  if (typeof packageName !== 'string' || typeof userName !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof userName} for userName and ${typeof packageName} for packageName`);
  }

  return `https://travis-ci.org/${userName}/${packageName}`;
};
