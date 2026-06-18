/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // word2 为空，word1 只能删除
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }

  // word1 为空，只能插入 word2 的字符
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] =
          Math.min(
            dp[i - 1][j - 1], // 替换
            dp[i - 1][j], // 删除
            dp[i][j - 1], // 插入
          ) + 1
      }
    }
  }

  return dp[m][n]
}
