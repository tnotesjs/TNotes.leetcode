/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  const chars = s.split('')

  for (let i = 0; i < chars.length; i++) {
    const code = chars[i].charCodeAt(0)
    // 判断是否为大写字母
    if (code >= 65 && code <= 90) {
      chars[i] = String.fromCharCode(code + 32)
    }
  }

  return chars.join('')
}
