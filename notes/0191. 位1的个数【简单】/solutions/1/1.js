/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  let mask = 1

  for (let i = 0; i < 32; i++) {
    // 检查当前位是否为 1
    if ((n & mask) !== 0) {
      count++
    }
    // 将 mask 左移一位，检查下一位
    mask <<= 1
  }

  return count
}
