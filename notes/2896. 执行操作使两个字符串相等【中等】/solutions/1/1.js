/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
var minOperations = function (s1, s2, x) {
  const diff = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diff.push(i)
  }
  const m = diff.length
  if (m % 2 !== 0) return -1
  if (m === 0) return 0
  // dp[i][0]: 前 i 个不同位全部配对的最小代价
  // dp[i][1]: 前 i 个不同位中有一个待全局配对的最小代价
  const INF = Infinity
  const f = new Array(m + 1).fill(null).map(() => [INF, INF])
  f[0] = [0, INF]
  for (let i = 1; i <= m; i++) {
    const cost = i >= 2 ? Math.min(diff[i - 1] - diff[i - 2], x) : INF
    f[i][0] = Math.min(f[i - 1][1] + x, i >= 2 ? f[i - 2][0] + cost : INF)
    f[i][1] = Math.min(f[i - 1][0], i >= 2 ? f[i - 2][1] + cost : INF)
  }
  return f[m][0]
}
