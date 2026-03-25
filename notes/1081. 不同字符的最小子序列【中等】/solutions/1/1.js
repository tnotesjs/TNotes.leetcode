/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const last = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) last[s.charCodeAt(i) - 97] = i
  const inStack = new Array(26).fill(false)
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97
    if (inStack[c]) continue
    while (
      stack.length &&
      stack[stack.length - 1] > c &&
      last[stack[stack.length - 1]] > i
    ) {
      inStack[stack.pop()] = false
    }
    stack.push(c)
    inStack[c] = true
  }
  return stack.map((c) => String.fromCharCode(c + 97)).join('')
}
