/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let prev = -Infinity // 上一个 1 的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - prev - 1 < k) return false
      prev = i
    }
  }
  return true
}
