/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let sum = 0

  for (let i = 1; i <= n; i++) {
    // 检查是否能被 3、5 或 7 整除
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i
    }
  }

  return sum
}
