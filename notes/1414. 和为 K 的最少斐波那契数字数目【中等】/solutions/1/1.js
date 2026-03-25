/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const fibs = [1, 1]
  while (fibs[fibs.length - 1] < k) {
    const n = fibs.length
    fibs.push(fibs[n - 1] + fibs[n - 2])
  }
  let count = 0
  for (let i = fibs.length - 1; i >= 0 && k > 0; i--) {
    if (fibs[i] <= k) {
      k -= fibs[i]
      count++
    }
  }
  return count
}
