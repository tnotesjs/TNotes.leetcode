/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 对于大数值，直接使用数学解法避免内存问题
  if (n > 1000000) {
    return n % 4 !== 0
  }

  // dp[i] 表示有 i 颗石子时，先手是否能赢
  const dp = new Array(n + 1)

  // 基础情况
  for (let i = 1; i <= Math.min(3, n); i++) {
    dp[i] = true // 1~3 颗石子，先手可以直接拿完获胜
  }

  // 状态转移
  for (let i = 4; i <= n; i++) {
    // 有 i 颗石子时，如果我方回合拿走石子（1或2或3）后，能让对手必败，则我方必胜
    dp[i] =
      !dp[i - 1] || // 我方拿 1 颗后，对手面对 i-1 必败
      !dp[i - 2] || // 我方拿 2 颗后，对手面对 i-2 必败
      !dp[i - 3] // 我方拿 3 颗后，对手面对 i-3 必败
  }

  return dp[n]
}
