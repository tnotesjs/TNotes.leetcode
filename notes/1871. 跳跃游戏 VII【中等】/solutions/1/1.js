/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  const n = s.length
  if (s[n - 1] === '1') return false
  const dp = new Array(n).fill(false)
  dp[0] = true
  let cnt = 0 // 差分前缀和
  for (let i = 1; i < n; i++) {
    if (i >= minJump) cnt += dp[i - minJump] ? 1 : 0
    if (i > maxJump) cnt -= dp[i - maxJump - 1] ? 1 : 0
    dp[i] = s[i] === '0' && cnt > 0
  }
  return dp[n - 1]
}
