/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length
  if (len % 2 !== 0) {
    return false
  }
  const stack = []
  for (let i = 0; i < len; i++) {
    const str = s[i]
    if (str === '(') {
      stack.push(')')
    } else if (str === '[') {
      stack.push(']')
    } else if (str === '{') {
      stack.push('}')
    } else {
      if (str !== stack.pop()) return false
    }
  }
  return stack.length === 0
}
