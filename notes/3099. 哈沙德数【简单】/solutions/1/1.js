/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  // 计算各数位之和
  let sum = 0
  let num = x
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  // 判断是否为哈沙德数
  return x % sum === 0 ? sum : -1
}
