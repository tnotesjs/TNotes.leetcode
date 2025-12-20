/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let minVal = Infinity
  let maxVal = -Infinity
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    if (v < minVal) minVal = v
    if (v > maxVal) maxVal = v
  }
  const reduced = maxVal - minVal - 2 * k
  return reduced > 0 ? reduced : 0
}
