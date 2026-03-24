/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  for (const ch of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > ch) {
      stack.pop()
      k--
    }
    stack.push(ch)
  }
  while (k > 0) {
    stack.pop()
    k--
  }
  const res = stack.join('').replace(/^0+/, '')
  return res || '0'
}
