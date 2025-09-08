/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 特殊情况处理
  if (n === 0) return 1

  // 找到大于 n 的最小 2 的幂次
  let powerOfTwo = 1
  while (powerOfTwo <= n) {
    powerOfTwo <<= 1 // 相当于 powerOfTwo *= 2
  }

  // 全1数 = powerOfTwo - 1
  // 反码 = 全1数 - 原数
  return powerOfTwo - 1 - n
}
