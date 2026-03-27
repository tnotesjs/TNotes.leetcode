/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
  const MOD = 1e9 + 7
  const n = zero + one
  // dp[i][j][last]: 前 i 个位置，j 个 0，最后一位是 last(0/1) 的方案数
  // 优化：dp[j][last] + 约束连续不超过 limit
  // dp[z][o][last]: z 个 0, o 个 1, last=0/1
  // 转移：放一个 0: dp[z][o][0] = dp[z-1][o][0] + dp[z-1][o][1] - dp[z-1-limit][o][1] (如果 z-1-limit>=0)
  const dp = Array.from({length: zero + 1}, () =>
    Array.from({length: one + 1}, () => [0, 0])
  )
  // 基础情况
  for (let z = 1; z <= Math.min(zero, limit); z++) dp[z][0][0] = 1
  for (let o = 1; o <= Math.min(one, limit); o++) dp[0][o][1] = 1
  
  for (let z = 0; z <= zero; z++) {
    for (let o = 0; o <= one; o++) {
      if (z > 0) {
        dp[z][o][0] = (dp[z][o][0] + dp[z - 1][o][0] + dp[z - 1][o][1]) % MOD
        if (z - 1 - limit >= 0) {
          dp[z][o][0] = (dp[z][o][0] - dp[z - 1 - limit][o][1] + MOD) % MOD
        }
      }
      if (o > 0) {
        dp[z][o][1] = (dp[z][o][1] + dp[z][o - 1][0] + dp[z][o - 1][1]) % MOD
        if (o - 1 - limit >= 0) {
          dp[z][o][1] = (dp[z][o][1] - dp[z][o - 1 - limit][0] + MOD) % MOD
        }
      }
    }
  }
  return (dp[zero][one][0] + dp[zero][one][1]) % MOD
}
