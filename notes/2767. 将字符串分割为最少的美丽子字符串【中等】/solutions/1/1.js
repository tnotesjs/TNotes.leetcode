/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  // 预计算 5 的幂的二进制表示
  const powers = new Set()
  for (let p = 1; p <= 0b111111111111111; p *= 5) {
    powers.add(p.toString(2))
  }
  const n = s.length
  // dp[i] 表示 s[0..i-1] 的最少分割数
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (s[j] === '0') continue
      const sub = s.slice(j, i)
      if (powers.has(sub)) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[n] === Infinity ? -1 : dp[n]
}
