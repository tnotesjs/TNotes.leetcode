/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  const n = nums.length
  // 构建前缀和数组，prefix[i] 表示 nums[0..i-1] 的和
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }

  let result = 0
  for (let i = 0; i < n; i++) {
    const start = Math.max(0, i - nums[i])
    // 子数组 nums[start..i] 的和 = prefix[i+1] - prefix[start]
    result += prefix[i + 1] - prefix[start]
  }

  return result
}
