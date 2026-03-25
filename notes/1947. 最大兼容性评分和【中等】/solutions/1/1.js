/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
  const m = students.length
  const score = (s, t) => s.reduce((a, v, i) => a + (v === t[i] ? 1 : 0), 0)
  // 状压DP
  const n = 1 << m
  const dp = new Array(n).fill(-1)
  dp[0] = 0
  for (let mask = 0; mask < n; mask++) {
    if (dp[mask] === -1) continue
    const i = mask
      .toString(2)
      .split('')
      .filter((c) => c === '1').length
    if (i >= m) continue
    for (let j = 0; j < m; j++) {
      if (mask & (1 << j)) continue
      const next = mask | (1 << j)
      dp[next] = Math.max(dp[next], dp[mask] + score(students[i], mentors[j]))
    }
  }
  return dp[n - 1]
}
