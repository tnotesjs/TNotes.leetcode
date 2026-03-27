/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function(s) {
  const n = s.length
  // dp[i] = 分割 s[0..i-1] 的最少子串数
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    const freq = new Array(26).fill(0)
    for (let j = i; j >= 1; j--) {
      freq[s.charCodeAt(j - 1) - 97]++
      // 检查 s[j-1..i-1] 是否所有字符频率相等
      let maxF = 0, cnt = 0
      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) { cnt++; maxF = Math.max(maxF, freq[k]) }
      }
      if (maxF * cnt === i - j + 1) {
        dp[i] = Math.min(dp[i], dp[j - 1] + 1)
      }
    }
  }
  return dp[n]
}
