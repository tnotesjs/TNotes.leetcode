/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const str = String(num)

  // 求最大值：找第一个不是9的数字，替换成9
  let maxStr = str
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '9') {
      maxStr = str.replaceAll(str[i], '9')
      break
    }
  }

  // 求最小值：替换第一个数字使其尽可能小
  let minStr = str
  const firstDigit = str[0]
  if (firstDigit !== '0') {
    minStr = str.replaceAll(firstDigit, '0')
  }

  return Number(maxStr) - Number(minStr)
}
