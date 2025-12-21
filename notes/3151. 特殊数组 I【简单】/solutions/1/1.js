/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    // 检查相邻元素奇偶性是否不同
    if (nums[i] % 2 === nums[i - 1] % 2) {
      return false
    }
  }
  return true
}
