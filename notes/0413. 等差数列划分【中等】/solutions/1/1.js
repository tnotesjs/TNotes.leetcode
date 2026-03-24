/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let res = 0,
    cur = 0
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      cur++
      res += cur
    } else {
      cur = 0
    }
  }
  return res
}
