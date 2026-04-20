/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  if (target > nums[len - 1]) return len
  let left = 0
  let right = len - 1
  while (left < right) {
    let mid = ((right - left) >> 1) + left
    if (target > nums[mid]) left = mid + 1
    else right = mid
  }
  return left
}
