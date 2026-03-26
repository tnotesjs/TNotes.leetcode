/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  nums.sort((a, b) => a - b)
  let res = Infinity
  for (let i = 1; i < nums.length; i++) {
    res = Math.min(res, nums[i] - nums[i - 1])
  }
  return res
}
