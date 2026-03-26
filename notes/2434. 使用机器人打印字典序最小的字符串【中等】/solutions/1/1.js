/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  const n = s.length
  // suffixMin[i] = 从 i 到末尾的最小字符
  const suffixMin = new Array(n + 1)
  suffixMin[n] = 'z'
  for (let i = n - 1; i >= 0; i--) {
    suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1]
  }
  const stack = []
  const res = []
  for (let i = 0; i < n; i++) {
    stack.push(s[i])
    while (stack.length && stack[stack.length - 1] <= suffixMin[i + 1]) {
      res.push(stack.pop())
    }
  }
  while (stack.length) res.push(stack.pop())
  return res.join('')
}
