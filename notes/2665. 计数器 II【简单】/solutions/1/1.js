/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let changedInit = init
  return {
    increment() {
      return ++changedInit
    },
    reset() {
      return (changedInit = init)
    },
    decrement() {
      return --changedInit
    },
  }
}
