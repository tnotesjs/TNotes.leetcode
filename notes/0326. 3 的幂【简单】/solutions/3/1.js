/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 3 的幂必须是正整数
  if (n <= 0) return false

  // 在 32 位整数范围内，最大的 3 的幂是 3^19 = 1162261467
  // 如果 n 是 3 的幂，那么 1162261467 能被 n 整除
  return 1162261467 % n === 0
}
