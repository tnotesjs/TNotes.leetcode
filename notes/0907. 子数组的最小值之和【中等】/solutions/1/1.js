/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7
  const n = arr.length
  const left = new Array(n),
    right = new Array(n)
  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop()
    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1
    stack.push(i)
  }
  stack.length = 0
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) stack.pop()
    right[i] = stack.length ? stack[stack.length - 1] - i : n - i
    stack.push(i)
  }
  let res = 0
  for (let i = 0; i < n; i++) res = (res + arr[i] * left[i] * right[i]) % MOD
  return res
}
