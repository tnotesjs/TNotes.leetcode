/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {

  const now = Date.now

  let timer
  let nextTimeToCallFn = 0
  return (...args) => {
    const delay = Math.max(0, nextTimeToCallFn - now())
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      nextTimeToCallFn = now() + t
    }, delay)
  }
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */