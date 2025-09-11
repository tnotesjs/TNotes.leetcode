/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 使用集合记录已经出现过的数字，用于检测循环
  const seen = new Set()

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = getSumOfSquares(n)
  }

  // 如果 n 等于 1，说明是快乐数；否则说明进入了循环
  return n === 1
}

// 辅助函数：计算数字各位平方和
function getSumOfSquares(num) {
  let sum = 0

  while (num > 0) {
    const digit = num % 10
    sum += digit * digit
    num = Math.floor(num / 10)
  }

  return sum
}
