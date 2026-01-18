/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  // 将数字转为字符数组并排序
  const digits = String(num).split('').sort()
  let num1 = ''
  let num2 = ''

  // 交替分配数字到两个数中
  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      num1 += digits[i]
    } else {
      num2 += digits[i]
    }
  }

  return Number(num1) + Number(num2)
}
