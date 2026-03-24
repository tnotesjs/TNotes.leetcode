/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) return true
    // 无法判断有序半边时，收缩边界
    if (nums[left] === nums[mid]) {
      left++
      continue
    }
    if (nums[left] < nums[mid]) {
      // 左半段有序
      if (nums[left] <= target && target < nums[mid]) right = mid - 1
      else left = mid + 1
    } else {
      // 右半段有序
      if (nums[mid] < target && target <= nums[right]) left = mid + 1
      else right = mid - 1
    }
  }
  return false
}
