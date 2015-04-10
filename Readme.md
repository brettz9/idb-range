# idb-range

[![](https://img.shields.io/npm/v/idb-range.svg)](https://npmjs.org/package/idb-range)
[![](https://img.shields.io/travis/treojs/idb-range.svg)](https://travis-ci.org/treojs/idb-range)
[![](http://img.shields.io/npm/dm/idb-range.svg)](https://npmjs.org/package/idb-range)

A MongoDB inspired interface for `IDBKeyRange`.

## Installation

    npm install --save idb-range

## Example

```js
var range = require('idb-range');

range({ lte: 'a', gt: 'b' }); // IDBKeyRange {lower: "a", upper: "b", lowerOpen: true, upperOpen: true}
range({ gte: 'c' }); // IDBKeyRange {lower: "c", upper: undefined, lowerOpen: false, upperOpen: true}

// it accepts a specific value as a shortcut to IDBKeyRange.only
range('hello'); // IDBKeyRange {lower: "hello", upper: "hello", lowerOpen: false, upperOpen: false}
```

## range(opts)

Parse `opts` to valid [`IDBKeyRange`](https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange).

Available options, when `opts` is an object:

* `eq` - equal
* `gt` - greater
* `lt` - lighter
* `gte` - greater equal
* `lte` - lighter equal

## License

MIT
