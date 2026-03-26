/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
  const n = heights.length
  const m = queries.length
  const ans = new Array(m).fill(-1)
  const pending = Array.from({ length: n }, () => [])

  for (let i = 0; i < m; i++) {
    let [a, b] = queries[i]
    if (a > b) [a, b] = [b, a]
    if (a === b || heights[a] < heights[b]) {
      ans[i] = b
    } else {
      pending[b].push([heights[a], i])
    }
  }

  // 单调栈（从右到左），栈内高度从底到顶递减
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    for (const [h, qi] of pending[i]) {
      let lo = 0,
        hi = stack.length - 1,
        res = -1
      while (lo <= hi) {
        const mid = (lo + hi) >> 1
        if (stack[mid][0] > h) {
          res = stack[mid][1]
          lo = mid + 1
        } else {
          hi = mid - 1
        }
      }
      ans[qi] = res
    }
    while (stack.length && stack[stack.length - 1][0] <= heights[i]) {
      stack.pop()
    }
    stack.push([heights[i], i])
  }

  return ans
}
