/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 3 的幂必须是正整数
  if (n <= 0) return false

  // 使用换底公式：log3(n) = log10(n) / log10(3)
  // 如果结果是整数，则 n 是 3 的幂
  const logResult = Math.log10(n) / Math.log10(3)
  return Number.isInteger(logResult)
}
