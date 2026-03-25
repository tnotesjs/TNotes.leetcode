/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const stack = [0]
  for (const c of s) {
    if (c === '(') {
      stack.push(0)
    } else {
      const top = stack.pop()
      stack[stack.length - 1] += Math.max(2 * top, 1)
    }
  }
  return stack[0]
}
