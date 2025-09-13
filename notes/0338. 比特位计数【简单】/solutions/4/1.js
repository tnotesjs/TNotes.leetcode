/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = new Array(n + 1)
  result[0] = 0

  let highBit = 0
  for (let i = 1; i <= n; i++) {
    // 当 i 是 2 的幂时，更新最高有效位
    if ((i & (i - 1)) === 0) {
      highBit = i
    }
    // i 的 1 的个数 = (i - highBit) 的 1 的个数 + 1
    result[i] = result[i - highBit] + 1
  }

  return result
}
