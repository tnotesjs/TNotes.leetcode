/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19])

  let result = 0
  for (let i = left; i <= right; i++) {
    const onesCount = i.toString(2).split('1').length - 1
    if (primes.has(onesCount)) {
      result++
    }
  }

  return result
}
