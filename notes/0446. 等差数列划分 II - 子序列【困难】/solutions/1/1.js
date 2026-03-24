/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const n = nums.length
  let res = 0
  // dp[i] 是 Map，key=公差，value=以 nums[i] 结尾的弱等差子序列数（长度>=2）
  const dp = Array.from({ length: n }, () => new Map())
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i] - nums[j]
      const cnt = dp[j].get(d) || 0
      res += cnt
      dp[i].set(d, (dp[i].get(d) || 0) + cnt + 1)
    }
  }
  return res
}
