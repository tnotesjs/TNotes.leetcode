/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
  const n = nums.length

  // 检查从位置 start 开始的长度为 k 的子数组是否严格递增
  const isIncreasing = (start) => {
    for (let i = start; i < start + k - 1; i++) {
      if (nums[i] >= nums[i + 1]) return false
    }
    return true
  }

  // 枚举所有可能的起始位置 a
  for (let a = 0; a + 2 * k <= n; a++) {
    if (isIncreasing(a) && isIncreasing(a + k)) {
      return true
    }
  }

  return false
}
