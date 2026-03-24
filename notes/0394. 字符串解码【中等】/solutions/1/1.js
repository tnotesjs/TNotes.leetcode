/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = [],
    strStack = []
  let cur = '',
    num = 0
  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      num = num * 10 + (ch - '0')
    } else if (ch === '[') {
      numStack.push(num)
      strStack.push(cur)
      num = 0
      cur = ''
    } else if (ch === ']') {
      cur = strStack.pop() + cur.repeat(numStack.pop())
    } else {
      cur += ch
    }
  }
  return cur
}
