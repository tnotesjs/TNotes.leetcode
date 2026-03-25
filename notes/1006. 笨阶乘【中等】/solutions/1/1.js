/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
  const ops = ['*', '/', '+', '-']
  const stack = [n]
  let idx = 0
  for (let i = n - 1; i >= 1; i--) {
    const op = ops[idx % 4]
    if (op === '*') {
      stack.push(stack.pop() * i)
    } else if (op === '/') {
      stack.push(Math.trunc(stack.pop() / i))
    } else if (op === '+') {
      stack.push(i)
    } else {
      stack.push(-i)
    }
    idx++
  }
  return stack.reduce((a, b) => a + b, 0)
}
