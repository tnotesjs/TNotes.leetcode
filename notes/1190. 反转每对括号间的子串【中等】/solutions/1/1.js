/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = ['']
  for (const c of s) {
    if (c === '(') {
      stack.push('')
    } else if (c === ')') {
      const top = stack.pop().split('').reverse().join('')
      stack[stack.length - 1] += top
    } else {
      stack[stack.length - 1] += c
    }
  }
  return stack[0]
}
