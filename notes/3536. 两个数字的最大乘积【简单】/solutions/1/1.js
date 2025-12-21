/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
  // 提取 n 的所有数字
  const digits = []
  while (n > 0) {
    digits.push(n % 10)
    n = Math.floor(n / 10)
  }

  // 降序排序，取最大的两个数字相乘
  digits.sort((a, b) => b - a)
  return digits[0] * digits[1]
}
