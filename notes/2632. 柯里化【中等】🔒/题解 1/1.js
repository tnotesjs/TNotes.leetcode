/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  const receivedArgs = []
  return function curried(...args) {
    receivedArgs.push(...args)
    if (receivedArgs.length >= fn.length) return fn(...receivedArgs)
    else return curried
  }
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */