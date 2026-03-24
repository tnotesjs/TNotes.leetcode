/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const res = new Array(n).fill(0)
  const stack = []
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop()
      res[j] = i - j
    }
    stack.push(i)
  }
  return res
}
