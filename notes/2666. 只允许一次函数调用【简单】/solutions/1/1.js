/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isCalled = false
  return function (...args) {
    if (!isCalled) {
      isCalled = true
      return fn(...args)
    } else {
      return undefined
    }
  }
}
