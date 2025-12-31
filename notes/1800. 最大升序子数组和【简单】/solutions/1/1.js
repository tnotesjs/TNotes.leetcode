/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let cur = nums[0]
  let best = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      cur += nums[i]
    } else {
      cur = nums[i]
    }
    if (cur > best) best = cur
  }

  return best
}
