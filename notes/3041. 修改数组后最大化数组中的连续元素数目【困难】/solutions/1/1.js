/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
  nums.sort((a, b) => a - b)
  // dp[v] = 以值 v 结尾的最长连续序列长度
  const dp = new Map()
  let ans = 0
  for (const x of nums) {
    // x 可以变成 x+1
    const v1 = (dp.get(x) || 0) + 1
    dp.set(x + 1, v1)
    // x 不变
    const v0 = (dp.get(x - 1) || 0) + 1
    dp.set(x, Math.max(dp.get(x) || 0, v0))
    ans = Math.max(ans, v1, dp.get(x))
  }
  return ans
}
