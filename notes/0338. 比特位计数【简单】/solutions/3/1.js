/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = new Array(n + 1)
  result[0] = 0 // 0 的二进制中没有 1

  for (let i = 1; i <= n; i++) {
    // i & (i - 1) 会清除 i 的最低位的 1
    // 例如：6 (110) → 6 & 5 = 4 (100)
    // 所以 i 比 i & (i - 1) 多一个 1
    result[i] = result[i & (i - 1)] + 1
  }

  return result
}
