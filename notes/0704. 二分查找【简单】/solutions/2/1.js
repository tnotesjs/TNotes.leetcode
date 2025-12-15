/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    mid = ((r - l) >> 1) + l
  while (l <= r) {
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) l = mid + 1
    else r = mid - 1
    mid = ((r - l) >> 1) + l
  }
  return -1
}
