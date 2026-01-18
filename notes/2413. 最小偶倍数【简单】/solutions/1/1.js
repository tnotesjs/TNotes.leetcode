/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  // 如果 n 是偶数，则 n 本身就是 2 的倍数，直接返回 n
  // 如果 n 是奇数，则需要返回 2n
  return n % 2 === 0 ? n : n * 2
}
