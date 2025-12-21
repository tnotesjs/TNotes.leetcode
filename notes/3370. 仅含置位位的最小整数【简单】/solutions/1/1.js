/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  // 找到大于等于 n 的最小的全 1 二进制数
  // 即找到最小的 k，使得 2^k - 1 >= n
  let x = 1
  while (x < n) {
    x = x * 2 + 1 // 1 -> 11 -> 111 -> 1111 ...
  }
  return x
}
