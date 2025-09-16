/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  // 特殊情况：0
  if (num === 0) return '0'

  // 十六进制字符映射
  const hexChars = '0123456789abcdef'
  let result = ''

  // 对于负数，转换为 32 位无符号整数
  // 使用无符号右移 0 位来获取补码表示
  let n = num >>> 0

  // 每次取最低 4 位，转换为十六进制字符
  while (n > 0) {
    result = hexChars[n & 15] + result
    n >>>= 4 // 无符号右移 4 位
  }

  return result
}
// @lc code=end

toHex(-1)
// toHex(26)
