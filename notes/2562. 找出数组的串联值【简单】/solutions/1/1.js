/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let left = 0,
    right = nums.length - 1
  let sum = 0

  while (left < right) {
    // 将首尾元素串联
    const concat = Number(String(nums[left]) + String(nums[right]))
    sum += concat
    left++
    right--
  }

  // 如果数组长度为奇数，加上中间元素
  if (left === right) {
    sum += nums[left]
  }

  return sum
}
