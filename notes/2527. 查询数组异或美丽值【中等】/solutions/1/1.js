/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function (nums) {
  return nums.reduce((a, b) => a ^ b, 0)
}
