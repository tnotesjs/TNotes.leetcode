/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0
  let temp = num

  // 遍历数字的每一位
  while (temp > 0) {
    const digit = temp % 10
    // 检查该位数字是否能整除原数字
    if (num % digit === 0) {
      count++
    }
    temp = Math.floor(temp / 10)
  }

  return count
}
