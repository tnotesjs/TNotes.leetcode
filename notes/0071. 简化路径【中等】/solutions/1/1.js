/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  for (const part of path.split('/')) {
    if (part === '..') {
      stack.pop() // 返回上一级
    } else if (part && part !== '.') {
      stack.push(part) // 有效目录名入栈
    }
  }
  return '/' + stack.join('/')
}
