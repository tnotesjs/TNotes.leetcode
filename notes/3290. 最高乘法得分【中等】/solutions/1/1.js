/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function(a, b) {
  const n = b.length
  // dp[j][k] = 用 b 的前 j 个元素选了 k 个（匹配 a[0..k-1]）的最大得分
  // dp[j][k] = max(dp[j-1][k], dp[j-1][k-1] + a[k-1] * b[j-1])
  let dp = [-Infinity, -Infinity, -Infinity, -Infinity, 0]
  // dp[k] = 选了 k 个的最大得分 (k=0..4)
  let prev = [0, -Infinity, -Infinity, -Infinity, -Infinity]
  for (let j = 0; j < n; j++) {
    const curr = prev.slice()
    for (let k = 1; k <= 4; k++) {
      curr[k] = Math.max(curr[k], prev[k - 1] + a[k - 1] * b[j])
    }
    prev = curr
  }
  return prev[4]
}
