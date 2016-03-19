# opent
[![npm version](https://img.shields.io/npm/v/opent.svg)](https://www.travis-ci.com/package/opent)
[![Build Status](https://travis-ci.org/dawsonbotsford/opent.svg?branch=master)](https://travis-ci.org/dawsonbotsford/opent)
[![npm download count](http://img.shields.io/npm/dm/opent.svg?style=flat)](http://travis-ci.org/opent)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> open travis-ci module pages in your browser

<br>

# CLI

## Install
```
$ npm install -g opent
```

<br>

## Usage

For your first use, `opent` will ask for your GitHub username. This is stored in `<module path>/config.json` and can be changed manually if need be. `opent` is intended to be used solely to open your own modules.

<br>

```
$ opent
//=> opens the travis-ci module page for the current directory in browser

$ opent chalk
//=> opens the travis-ci module page for chalk in browser

$ opent inf sist opent
//=> opens the travis-ci module pages for inf, sist, and opent in browser
```

<br>

More help
```
$ opent --help

  Usage
    $ opent
    //=> opens the travis-ci module page for the current directory in browser

    $ opent [*<module name>]
    //=> opens the travis-ci module page for N-lengthed <module name> packages in browser'

  Examples
    $ opent express
    //=> opens the travis-ci module page for express in browser
```

<br>

---
# Package

## Install
```
npm install --save opent
```

<br>

## Usage

```js
const opent = require('opent');

opent('expressjs', 'express');
//=> https://travis-ci.org/expressjs/express
```

<br>

## API

### opent(username, repoName)

##### username

Type: `string`

##### repoName

Type: `string`

#### returns

Type: `string`

<br>

## Related
* [openm](https://github.com/dawsonbotsford/openm)

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)


---
If you like this, star it. If you want to follow me, follow me.
