/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // 1 不是完美数
  if (num <= 1) {
    return false
  }

  let sum = 1 // 1 是所有大于1的数的因子

  // 只需要检查到 sqrt(num)
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i
      // 如果 i 不是平方根，则 num/i 也是因子
      if (i * i !== num) {
        sum += num / i
      }
    }
  }

  return sum === num
}
