/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length
  // left[i] = 以 i 为峰值，左侧（含 i）的最大高度和
  const left = new Array(n)
  const stk1 = []
  for (let i = 0; i < n; i++) {
    while (stk1.length && maxHeights[stk1[stk1.length - 1]] >= maxHeights[i]) {
      stk1.pop()
    }
    if (stk1.length === 0) {
      left[i] = maxHeights[i] * (i + 1)
    } else {
      const j = stk1[stk1.length - 1]
      left[i] = left[j] + maxHeights[i] * (i - j)
    }
    stk1.push(i)
  }
  // right[i] = 以 i 为峰值，右侧（含 i）的最大高度和
  const right = new Array(n)
  const stk2 = []
  for (let i = n - 1; i >= 0; i--) {
    while (stk2.length && maxHeights[stk2[stk2.length - 1]] >= maxHeights[i]) {
      stk2.pop()
    }
    if (stk2.length === 0) {
      right[i] = maxHeights[i] * (n - i)
    } else {
      const j = stk2[stk2.length - 1]
      right[i] = right[j] + maxHeights[i] * (j - i)
    }
    stk2.push(i)
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, left[i] + right[i] - maxHeights[i])
  }
  return ans
}
