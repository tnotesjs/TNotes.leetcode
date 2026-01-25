/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  // 只有当参与运算的数最低位都是 0（都是偶数），结果才有尾随零
  // 因此只需检查是否至少有 2 个偶数
  let evenCount = 0
  for (const num of nums) {
    if (num % 2 === 0) {
      evenCount++
      if (evenCount >= 2) return true
    }
  }
  return false
}
