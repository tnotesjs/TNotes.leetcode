/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0

  // 对数组中所有元素进行异或运算
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }

  return result
}
