/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const n = s.length
  // dp[i] 表示 s[0..i-1] 是否可以被拆分
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}
