/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let even = 0,
    odd = 0
  let index = 0

  while (n > 0) {
    // 检查当前位是否为 1
    if (n & 1) {
      if (index % 2 === 0) {
        even++
      } else {
        odd++
      }
    }
    // 右移一位
    n >>= 1
    index++
  }

  return [even, odd]
}
