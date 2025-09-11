/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0

  // 处理 JS 中的负数情况
  n = n >>> 0

  // Brian Kernighan 算法
  while (n !== 0) {
    count++
    // 清除最右边的 1
    n &= n - 1
  }

  return count
}
