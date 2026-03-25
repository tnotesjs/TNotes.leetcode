/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const n = nums.length
  const dp = Array.from({ length: n }, () => new Map())
  let res = 2
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j]
      const prev = dp[j].get(diff) || 1
      dp[i].set(diff, prev + 1)
      res = Math.max(res, prev + 1)
    }
  }
  return res
}
