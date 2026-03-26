/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function (nums) {
  const MOD = 1e9 + 7
  const n = nums.length
  const full = (1 << n) - 1
  // dp[mask][i] 表示已选集合为 mask，最后选的是 nums[i] 的方案数
  const dp = Array.from({ length: 1 << n }, () => new Array(n).fill(0))
  for (let i = 0; i < n; i++) dp[1 << i][i] = 1
  for (let mask = 1; mask <= full; mask++) {
    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i)) || dp[mask][i] === 0) continue
      for (let j = 0; j < n; j++) {
        if (mask & (1 << j)) continue
        if (nums[j] % nums[i] === 0 || nums[i] % nums[j] === 0) {
          dp[mask | (1 << j)][j] = (dp[mask | (1 << j)][j] + dp[mask][i]) % MOD
        }
      }
    }
  }
  let res = 0
  for (let i = 0; i < n; i++) res = (res + dp[full][i]) % MOD
  return res
}
