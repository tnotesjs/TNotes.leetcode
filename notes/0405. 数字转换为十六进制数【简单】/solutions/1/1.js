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

  // 对于负数，转换为32位无符号整数
  // 使用无符号右移0位来获取补码表示
  let n = num >>> 0

  // 每次取最低4位，转换为十六进制字符
  while (n > 0) {
    result = hexChars[n & 15] + result
    n >>>= 4 // 无符号右移4位
  }

  return result
}
