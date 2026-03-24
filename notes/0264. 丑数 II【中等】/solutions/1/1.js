/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n)
  dp[0] = 1
  let p2 = 0,
    p3 = 0,
    p5 = 0
  for (let i = 1; i < n; i++) {
    const a = dp[p2] * 2,
      b = dp[p3] * 3,
      c = dp[p5] * 5
    dp[i] = Math.min(a, b, c)
    if (dp[i] === a) p2++
    if (dp[i] === b) p3++
    if (dp[i] === c) p5++
  }
  return dp[n - 1]
}
