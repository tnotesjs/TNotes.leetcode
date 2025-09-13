/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 2 的幂必须是正数，且二进制表示中只有一个 1
  if (n <= 0) return false

  // 使用内置函数计算二进制中 1 的个数
  return (n.toString(2).match(/1/g) || []).length === 1
}
