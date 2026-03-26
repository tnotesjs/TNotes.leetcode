/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let target = 0
  for (let x = num2; x; x &= x - 1) target++
  let res = 0
  // 从高位到低位，优先设置 num1 中已有的 1
  for (let i = 29; i >= 0 && target > 0; i--) {
    if (num1 & (1 << i)) {
      res |= (1 << i)
      target--
    }
  }
  // 如果还有剩余 1，从低位开始补
  for (let i = 0; i <= 29 && target > 0; i++) {
    if (!(res & (1 << i))) {
      res |= (1 << i)
      target--
    }
  }
  return res
}
