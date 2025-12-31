/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = []

  for (const ch of s) {
    if (
      stack.length > 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - ch.charCodeAt(0)) === 32
    ) {
      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  return stack.join('')
}
