/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  // 按位或结果有尾随零，意味着最低位是0
  // 只有所有参与运算的数最低位都是0（都是偶数），结果才有尾随零
  // 所以只需要检查是否至少有2个偶数
  let evenCount = 0
  for (const num of nums) {
    if (num % 2 === 0) {
      evenCount++
      if (evenCount >= 2) return true
    }
  }
  return false
}
