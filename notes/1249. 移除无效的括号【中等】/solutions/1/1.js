/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const arr = s.split('')
  const stack = [] // 存储待匹配的 '(' 的索引
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        arr[i] = '' // 多余的 ')'
      }
    }
  }
  for (const idx of stack) arr[idx] = '' // 多余的 '('
  return arr.join('')
}
