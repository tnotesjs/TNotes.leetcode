/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let first = 'a',
    second = 'b',
    hi = x,
    lo = y
  if (x < y) {
    first = 'b'
    second = 'a'
    hi = y
    lo = x
  }
  let res = 0
  // 第一轮删分值高的
  let stack = []
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === first && c === second) {
      stack.pop()
      res += hi
    } else {
      stack.push(c)
    }
  }
  // 第二轮删分值低的
  const remaining = stack
  stack = []
  for (const c of remaining) {
    if (stack.length && stack[stack.length - 1] === second && c === first) {
      stack.pop()
      res += lo
    } else {
      stack.push(c)
    }
  }
  return res
}
