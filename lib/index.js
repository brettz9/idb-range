
/**
 * Parse `opts` to valid IDBKeyRange.
 * https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange
 *
 * @param {Object} opts
 * @return {IDBKeyRange}
 */

module.exports = function range(opts) {
  var IDBKeyRange = global.IDBKeyRange || global.webkitIDBKeyRange
  if (opts instanceof IDBKeyRange) return opts
  if (typeof opts === 'undefined') return null
  if (!isObject(opts)) return IDBKeyRange.only(opts)
  var keys = Object.keys(opts).sort()

  if (keys.length == 1) {
    var key = keys[0]
    var val = opts[key]

    switch (key) {
      case 'eq': return IDBKeyRange.only(val)
      case 'gt': return IDBKeyRange.lowerBound(val, true)
      case 'lt': return IDBKeyRange.upperBound(val, true)
      case 'gte': return IDBKeyRange.lowerBound(val)
      case 'lte': return IDBKeyRange.upperBound(val)
      default: throw new TypeError('`' + key + '` is not valid key')
    }
  } else {
    var x = opts[keys[0]]
    var y = opts[keys[1]]
    var pattern = keys.join('-')

    switch (pattern) {
      case 'gt-lt': return IDBKeyRange.bound(x, y, true, true)
      case 'gt-lte': return IDBKeyRange.bound(x, y, true, false)
      case 'gte-lt': return IDBKeyRange.bound(x, y, false, true)
      case 'gte-lte': return IDBKeyRange.bound(x, y, false, false)
      default: throw new TypeError('`' + pattern +'` are conflicted keys')
    }
  }
}

/**
 * Check if `obj` is an object (an even not an array).
 *
 * @param {Object} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]'
}
