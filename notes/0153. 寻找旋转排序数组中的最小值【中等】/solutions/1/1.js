/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (nums[mid] < nums[high]) high = mid
    else low = mid + 1
  }

  return nums[low]
}
