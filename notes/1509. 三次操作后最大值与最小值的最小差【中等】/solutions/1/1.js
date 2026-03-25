/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) return 0
  nums.sort((a, b) => a - b)
  const n = nums.length
  return Math.min(
    nums[n - 1] - nums[3], // 改最小的 3 个
    nums[n - 2] - nums[2], // 改最小 2 个 + 最大 1 个
    nums[n - 3] - nums[1], // 改最小 1 个 + 最大 2 个
    nums[n - 4] - nums[0], // 改最大的 3 个
  )
}
