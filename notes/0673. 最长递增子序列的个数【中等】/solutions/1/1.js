/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  const cnt = new Array(n).fill(1)
  let maxLen = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          cnt[i] = cnt[j]
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j]
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    if (dp[i] === maxLen) res += cnt[i]
  }
  return res
}
