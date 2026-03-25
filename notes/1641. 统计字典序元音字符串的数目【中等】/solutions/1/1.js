/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  // dp[j] = 以第 j 个元音结尾的字符串数
  const dp = [1, 1, 1, 1, 1]
  for (let i = 1; i < n; i++) for (let j = 1; j < 5; j++) dp[j] += dp[j - 1]
  return dp[0] + dp[1] + dp[2] + dp[3] + dp[4]
}
