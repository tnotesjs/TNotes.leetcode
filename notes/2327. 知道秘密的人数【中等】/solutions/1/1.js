/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1000000007
  // dp[i] = 第 i 天新知道秘密的人数
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  let share = 0 // 当天可分享的人数
  for (let i = 2; i <= n; i++) {
    // 加上 delay 天前的新增人数（他们今天开始能分享）
    if (i - delay >= 1) share = (share + dp[i - delay]) % MOD
    // 减去 forget 天前的新增人数（他们今天忘记了）
    if (i - forget >= 1) share = (share - dp[i - forget] + MOD) % MOD
    dp[i] = share
  }
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (i + forget > n) {
      res = (res + dp[i]) % MOD
    }
  }
  return res
}
