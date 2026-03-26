/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
  const MOD = 1000000007
  const total = nums.reduce((a, b) => a + b, 0)
  if (total < 2 * k) return 0

  // 用 DP 统计元素和 < k 的子集数
  const dp = new Array(k).fill(0)
  dp[0] = 1
  for (const num of nums) {
    for (let j = k - 1; j >= num; j--) {
      dp[j] = (dp[j] + dp[j - num]) % MOD
    }
  }

  let bad = 0
  for (let j = 0; j < k; j++) bad = (bad + dp[j]) % MOD
  bad = (bad * 2) % MOD

  let totalP = 1
  for (let i = 0; i < nums.length; i++) totalP = (totalP * 2) % MOD

  return (totalP - bad + MOD) % MOD
}
