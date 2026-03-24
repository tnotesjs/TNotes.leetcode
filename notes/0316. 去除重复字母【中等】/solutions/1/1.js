/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const lastIndex = new Array(26).fill(-1)
  for (let i = 0; i < s.length; i++) lastIndex[s.charCodeAt(i) - 97] = i
  const stack = []
  const inStack = new Array(26).fill(false)
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97
    if (inStack[c]) continue
    while (
      stack.length &&
      stack[stack.length - 1] > c &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      inStack[stack.pop()] = false
    }
    stack.push(c)
    inStack[c] = true
  }
  return stack.map((c) => String.fromCharCode(c + 97)).join('')
}
