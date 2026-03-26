/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + (s[i] === '*' ? 1 : 0)
  }
  // left[i]: i 及其左边最近的蜡烛位置
  const left = new Array(n).fill(-1)
  // right[i]: i 及其右边最近的蜡烛位置
  const right = new Array(n).fill(-1)
  for (let i = 0; i < n; i++) {
    left[i] = s[i] === '|' ? i : i > 0 ? left[i - 1] : -1
  }
  for (let i = n - 1; i >= 0; i--) {
    right[i] = s[i] === '|' ? i : i < n - 1 ? right[i + 1] : -1
  }
  const ans = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    const l = right[queries[i][0]]
    const r = left[queries[i][1]]
    ans[i] = l !== -1 && r !== -1 && l < r ? prefix[r] - prefix[l] : 0
  }
  return ans
}
