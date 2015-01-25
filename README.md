case-dash [![Code Climate](https://codeclimate.com/github/ileri/case-dot/badges/gpa.svg)](https://codeclimate.com/github/ileri/case-dot) [![Build Status](https://travis-ci.org/ileri/case-dash.svg)](https://travis-ci.org/ileri/case-dash)
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
var caseDash = require("case-dash");

// parse
caseDash.parse("this-is-an-example"); // ["this", "is", "an", "example"]

// stringify
caseDash.stringify(["this", "is", "an", "example"]); // "this-is-an-example"

// check
caseDash.is("this-is-an-example"); // true
caseDash.is("this_is_an_example"); // false
caseDash.is("thisIsAnExample"); // false
caseDash.is("this"); // false
```
