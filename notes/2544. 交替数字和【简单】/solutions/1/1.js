/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  const str = String(n)
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    const digit = Number(str[i])
    // 偶数位置（从 0 开始）为正号，奇数位置为负号
    sum += i % 2 === 0 ? digit : -digit
  }

  return sum
}
