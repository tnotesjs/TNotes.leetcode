/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {}

// 若 n 为奇数：全用同一字符；若 n 为偶数：前 n-1 个同字符，最后一个不同字符
var generateTheString = function (n) {
  if (n % 2 === 1) return 'a'.repeat(n)
  return 'a'.repeat(n - 1) + 'b'
}
