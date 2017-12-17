# case-dash [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Parse and stringify strings delimited by a dash

## Installation

```sh
$ npm install --save case-dash
```

## Usage

```js
const caseDash = require("case-dash");

// Parse
caseDash.parse("this-is-an-example"); // ['this', 'is', 'an', 'example']

// Stringify
caseDash.stringify(["this", "is", "an", "example"]); // 'this-is-an-example'

// Check
caseDash.is("this-is-an-example"); // True
caseDash.is("this_is_an_example"); // False
caseDash.is("thisIsAnExample"); // False
caseDash.is("this"); // False
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/case-dash.svg
[npm-url]: https://npmjs.org/package/case-dash
[travis-image]: https://travis-ci.org/Myhlamaeus/case-dash.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/case-dash
[daviddm-image]: https://david-dm.org/Myhlamaeus/case-dash.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/case-dash
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/case-dash/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/case-dash
