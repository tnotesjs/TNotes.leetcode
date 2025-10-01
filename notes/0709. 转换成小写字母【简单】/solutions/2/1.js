/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const code = char.charCodeAt(0)

    // 判断是否为大写字母 (ASCII: 65-90)
    if (code >= 65 && code <= 90) {
      // 转换为小写字母 (ASCII: 97-122)
      result += String.fromCharCode(code + 32)
    } else {
      result += char
    }
  }

  return result
}
