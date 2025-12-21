/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  // 如果 k 中某一位是 1，但 n 中是 0，则无法实现
  // 即 k 必须是 n 的子集 (n | k) === n
  if ((n | k) !== n) return -1

  // 统计 n 和 k 不同的位数（即需要从 1 变成 0 的位数）
  return (n ^ k).toString(2).split('1').length - 1
}
