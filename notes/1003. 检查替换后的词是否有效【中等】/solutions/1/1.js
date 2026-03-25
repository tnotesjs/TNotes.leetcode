/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (const c of s) {
    if (c === 'c') {
      if (
        stack.length >= 2 &&
        stack[stack.length - 1] === 'b' &&
        stack[stack.length - 2] === 'a'
      ) {
        stack.pop()
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}
