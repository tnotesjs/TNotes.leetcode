/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 !== 0) return false
  const target = sum / 2
  const dp = new Uint8Array(target + 1)
  dp[0] = 1
  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] |= dp[j - num]
    }
    // if (dp[target] === 1) return true // 可提前退出
  }
  return false
}
