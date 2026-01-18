/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    // 题目中的位置是从1开始的，所以是 i + 1
    if (n % (i + 1) === 0) {
      sum += nums[i] * nums[i]
    }
  }
  return sum
}
