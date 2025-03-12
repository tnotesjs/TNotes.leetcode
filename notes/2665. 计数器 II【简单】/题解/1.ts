type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
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