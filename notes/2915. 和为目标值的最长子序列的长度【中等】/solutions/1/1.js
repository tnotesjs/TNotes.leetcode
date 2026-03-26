/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
  const dp = new Array(target + 1).fill(-1)
  dp[0] = 0
  for (const x of nums) {
    for (let j = target; j >= x; j--) {
      if (dp[j - x] !== -1) {
        dp[j] = Math.max(dp[j], dp[j - x] + 1)
      }
    }
  }
  return dp[target]
}
