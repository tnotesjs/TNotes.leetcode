/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []

  for (const char of s) {
    // 如果栈顶元素与当前字符相同，则弹出栈顶元素（相当于删除相邻重复项）
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      // 否则将当前字符压入栈
      stack.push(char)
    }
  }

  return stack.join('')
}
