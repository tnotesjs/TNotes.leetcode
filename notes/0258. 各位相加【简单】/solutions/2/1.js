/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 如果是一位数，直接返回
  if (num < 10) return num

  let sum = 0
  // 计算各位数字之和
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }

  // 递归处理和
  return addDigits(sum)
}
