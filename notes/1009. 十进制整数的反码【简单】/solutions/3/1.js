/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 找到 n 的二进制位数
  let bitLength = n.toString(2).length

  // 构造相同位数的全1掩码
  let mask = (1 << bitLength) - 1

  // 异或运算得到补数
  return n ^ mask
}
