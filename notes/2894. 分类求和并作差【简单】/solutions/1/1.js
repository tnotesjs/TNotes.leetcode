/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  // [1, n] 的总和
  const totalSum = (n * (n + 1)) / 2

  // 能被 m 整除的数的个数
  const k = Math.floor(n / m)

  // 能被 m 整除的数之和 = m * (1 + 2 + ... + k) = m * k * (k + 1) / 2
  const num2 = (m * k * (k + 1)) / 2

  // num1 = totalSum - num2
  // num1 - num2 = totalSum - 2 * num2
  return totalSum - 2 * num2
}
