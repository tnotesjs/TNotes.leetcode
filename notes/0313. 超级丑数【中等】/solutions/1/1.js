/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const k = primes.length
  const dp = new Array(n)
  dp[0] = 1
  const pointers = new Array(k).fill(0)
  for (let i = 1; i < n; i++) {
    let min = Infinity
    for (let j = 0; j < k; j++) {
      min = Math.min(min, dp[pointers[j]] * primes[j])
    }
    dp[i] = min
    for (let j = 0; j < k; j++) {
      if (dp[pointers[j]] * primes[j] === min) pointers[j]++
    }
  }
  return dp[n - 1]
}
