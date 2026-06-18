/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length
  const dp = Array.from({ length: n + 1 }, (_, j) => j) // word1 为空时，插入 j 次

  for (let i = 1; i <= m; i++) {
    let prev = dp[0] // 保存左上角 dp[i-1][j-1]
    dp[0] = i // word2 为空时，删除 i 次
    for (let j = 1; j <= n; j++) {
      const temp = dp[j]
      if (word1[i - 1] === word2[j - 1]) {
        dp[j] = prev // 字符相同，无需操作
      } else {
        dp[j] = Math.min(prev, dp[j], dp[j - 1]) + 1 // 替换、删除、插入
      }
      prev = temp
    }
  }
  return dp[n]
}
