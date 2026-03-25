/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let res = 0
  const stack = [Infinity]
  for (const val of arr) {
    while (stack[stack.length - 1] <= val) {
      const mid = stack.pop()
      res += mid * Math.min(stack[stack.length - 1], val)
    }
    stack.push(val)
  }
  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1]
  }
  return res
}
