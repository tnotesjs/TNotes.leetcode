/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let maxValue = 0

  for (const str of strs) {
    // 判断字符串是否只包含数字
    const isDigit = /^\d+$/.test(str)
    const value = isDigit ? Number(str) : str.length
    maxValue = Math.max(maxValue, value)
  }

  return maxValue
}
