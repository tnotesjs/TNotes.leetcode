/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 处理字符串，模拟退格操作
  const buildString = (str) => {
    const stack = []
    for (const char of str) {
      if (char === '#') {
        // 遇到退格符，弹出栈顶元素（如果有）
        if (stack.length > 0) {
          stack.pop()
        }
      } else {
        // 普通字符，压入栈
        stack.push(char)
      }
    }
    return stack.join('')
  }

  // 比较处理后的字符串
  return buildString(s) === buildString(t)
}
