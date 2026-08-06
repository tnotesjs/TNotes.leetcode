/**
 * @param {number} n
 * @yields {number}
 */
function* factorial(n) {
  let result = 1;
  if (n === 0) {
    yield 1;
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
      yield result;
    }
  }
};

/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */