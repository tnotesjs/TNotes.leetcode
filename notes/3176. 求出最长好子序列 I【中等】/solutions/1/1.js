/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
  const n = nums.length
  // dp[i][j] = 以 nums[i] 结尾，有 j 个不同相邻对的最长子序列长度
  const dp = Array.from({length: n}, () => new Array(k + 1).fill(0))
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      dp[i][j] = 1
      for (let p = 0; p < i; p++) {
        if (nums[p] === nums[i]) {
          dp[i][j] = Math.max(dp[i][j], dp[p][j] + 1)
        } else if (j > 0) {
          dp[i][j] = Math.max(dp[i][j], dp[p][j - 1] + 1)
        }
      }
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}
