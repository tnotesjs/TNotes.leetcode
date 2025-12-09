/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]
}
