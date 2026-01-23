/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let neg = 0 // 记录负数的个数

  for (const v of nums) {
    if (v === 0) return 0 // 如果有0，则乘积为0，返回0
    if (v < 0) neg += 1 // 统计负数的个数
  }

  // 如果负数个数为偶数，则乘积为正数，返回1
  // 如果负数个数为奇数，则乘积为负数，返回-1
  return neg % 2 === 0 ? 1 : -1
}
