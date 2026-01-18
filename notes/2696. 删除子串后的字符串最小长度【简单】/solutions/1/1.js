/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = []
  for (const char of s) {
    // 如果栈顶和当前字符构成 "AB" 或 "CD"，弹出栈顶
    if (stack.length > 0) {
      const top = stack[stack.length - 1]
      if ((top === 'A' && char === 'B') || (top === 'C' && char === 'D')) {
        stack.pop()
        continue
      }
    }
    stack.push(char)
  }
  return stack.length
}
