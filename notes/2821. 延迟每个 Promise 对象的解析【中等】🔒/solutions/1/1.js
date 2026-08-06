/**
 * @param {Array<Function>} functions
 * @param {number} ms
 * @return {Array<Function>}
 */
var delayAll = function (functions, ms) {
  return functions.map((fn) => {
    return () =>
      new Promise((resolve) => {
        fn().then((result) => {
          setTimeout(() => resolve(result), ms)
        })
      })
  })
}
