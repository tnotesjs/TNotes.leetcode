/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 使用Boyer-Moore投票算法
  let candidate = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
      count = 1
    } else if (nums[i] === candidate) {
      count++
    } else {
      count--
    }
  }

  return candidate
}
