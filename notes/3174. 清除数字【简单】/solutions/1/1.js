/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = []

  for (const c of s) {
    if (c >= '0' && c <= '9') {
      // 遇到数字，删除栈顶的非数字字符
      if (stack.length > 0) {
        stack.pop()
      }
    } else {
      // 非数字字符，入栈
      stack.push(c)
    }
  }

  return stack.join('')
}
