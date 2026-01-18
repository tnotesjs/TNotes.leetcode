/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = ''
  for (const char of s) {
    if (char === 'i') {
      // 反转当前字符串
      result = result.split('').reverse().join('')
    } else {
      result += char
    }
  }
  return result
}
