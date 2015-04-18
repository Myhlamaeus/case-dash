case-dash [![Code Climate](https://codeclimate.com/github/ileri/case-dash/badges/gpa.svg)](https://codeclimate.com/github/ileri/case-dash) [![Build Status](https://travis-ci.org/ileri/case-dash.svg)](https://travis-ci.org/ileri/case-dash) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard
==============
> Parse and stringify strings delimited by a dash

Install
--------------
```
$ npm install --save case-dash
```

Usage
--------------
```js
var caseDash = require('case-dash')

// parse
caseDash.parse('this-is-an-example') // ['this', 'is', 'an', 'example']

// stringify
caseDash.stringify(['this', 'is', 'an', 'example']) // 'this-is-an-example'

// check
caseDash.is('this-is-an-example') // true
caseDash.is('this_is_an_example') // false
caseDash.is('thisIsAnExample') // false
caseDash.is('this') // false
```
