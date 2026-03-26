/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const sieve = new Uint8Array(right + 1)
  sieve[0] = sieve[1] = 1
  for (let i = 2; i * i <= right; i++) {
    if (!sieve[i]) {
      for (let j = i * i; j <= right; j += i) sieve[j] = 1
    }
  }
  let prev = -1,
    ans = [-1, -1],
    minDiff = Infinity
  for (let i = left; i <= right; i++) {
    if (!sieve[i]) {
      if (prev !== -1 && i - prev < minDiff) {
        minDiff = i - prev
        ans = [prev, i]
      }
      prev = i
    }
  }
  return ans
}
