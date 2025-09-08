/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 将数字转换为二进制字符串
  const binaryStr = n.toString(2)

  // 翻转每一位
  let complementStr = ''
  for (const bit of binaryStr) {
    complementStr += bit === '0' ? '1' : '0'
  }

  // 转换回十进制
  return parseInt(complementStr, 2)
}
