/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 二分找左边界：最小的 >= target 的位置
  const lowerBound = (t) => {
    let left = 0,
      right = nums.length
    while (left < right) {
      const mid = (left + right) >> 1
      if (nums[mid] < t) left = mid + 1
      else right = mid
    }
    return left
  }

  const start = lowerBound(target)
  if (start === nums.length || nums[start] !== target) return [-1, -1]
  const end = lowerBound(target + 1) - 1
  return [start, end]
}
