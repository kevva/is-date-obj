# is-date-obj [![Build Status](https://travis-ci.org/kevva/is-date-obj.svg?branch=master)](https://travis-ci.org/kevva/is-date-obj)

> Check if an object is a `Date` object


## Install

```
$ npm install --save is-date-obj
```


## Usage

```js
const isDateObj = require('is-date-obj');

isDateObj(new Date());
//=> true

isDateObj({});
//=> false
```


## API

### isDateObj(input)

#### input

Value to check if it's a `Date` object.


## License

MIT © [Kevin Martensson](https://github.com/kevva)
