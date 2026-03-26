/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b)
  let res = 0,
    left = 0
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) left++
    res = Math.max(res, right - left + 1)
  }
  return res
}
