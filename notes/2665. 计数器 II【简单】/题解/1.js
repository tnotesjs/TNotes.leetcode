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
      return changedInit = init
    },
    decrement() {
      return --changedInit
    }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */