/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const mid = ((r - l) >> 1) + l
    if (nums[mid] > nums[mid + 1]) r = mid
    else l = mid + 1
  }

  return l
}
