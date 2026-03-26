/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function (nums, k) {
  const n = nums.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    const cnt = new Array(n).fill(0)
    let trimLen = 0
    for (let j = i - 1; j >= 0; j--) {
      cnt[nums[j]]++
      if (cnt[nums[j]] === 2) trimLen += 2
      else if (cnt[nums[j]] > 2) trimLen++
      dp[i] = Math.min(dp[i], dp[j] + k + trimLen)
    }
  }
  return dp[n]
}
