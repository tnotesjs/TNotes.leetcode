/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  // 特殊情况处理
  if (target > nums[len - 1]) return len
  // 二分
  let l = 0,
    r = len - 1,
    mid = ((r - l) >> 1) + l
  while (l < r) {
    if (target === nums[mid]) return mid
    else if (target > nums[mid]) l = mid + 1
    else r = mid
    mid = ((r - l) >> 1) + l
  }
  return mid
}
