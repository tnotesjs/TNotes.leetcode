/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSpaceWastedKResizing = function (nums, k) {
  const n = nums.length
  // dp[i][j] = 分 j+1 段处理前 i+1 个元素的最小浪费
  const INF = Infinity
  const dp = Array.from({ length: n }, () => new Array(k + 1).fill(INF))
  // 预计算区间 [i,j] 的浪费 = max * len - sum
  let sum = 0,
    maxV = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    maxV = Math.max(maxV, nums[i])
    dp[i][0] = maxV * (i + 1) - sum
  }
  for (let j = 1; j <= k; j++) {
    for (let i = 0; i < n; i++) {
      let mx = 0,
        s = 0
      for (let l = i; l >= 1; l--) {
        mx = Math.max(mx, nums[l])
        s += nums[l]
        dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - 1] + mx * (i - l + 1) - s)
      }
    }
  }
  return dp[n - 1][k]
}
