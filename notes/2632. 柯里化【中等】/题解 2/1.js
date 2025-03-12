/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn, ...rest1) {
  return (...rest2) => {
    const receivedArgs = rest1.concat(rest2)
    return receivedArgs.length >= fn.length ?
      fn(...receivedArgs) :
      curry(fn, ...receivedArgs)
  }
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */