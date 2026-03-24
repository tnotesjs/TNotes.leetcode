/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length
  let maxVal = -Infinity,
    minVal = Infinity
  let left = -1,
    right = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] < maxVal) right = i
    else maxVal = nums[i]
  }
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > minVal) left = i
    else minVal = nums[i]
  }
  return right === -1 ? 0 : right - left + 1
}
