/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
  const n = s.length

  // cost[i][j] = 将 s[i..j] 变成半回文串的最少修改次数
  const cost = Array.from({length: n}, () => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const len = j - i + 1
      let best = len
      for (let d = 1; d < len; d++) {
        if (len % d !== 0) continue
        let changes = 0
        for (let r = 0; r < d; r++) {
          const group = []
          for (let p = i + r; p <= j; p += d) group.push(s[p])
          const gl = group.length
          for (let a = 0; a < (gl >> 1); a++) {
            if (group[a] !== group[gl - 1 - a]) changes++
          }
        }
        best = Math.min(best, changes)
      }
      cost[i][j] = best
    }
  }

  const INF = 1e9
  const dp = Array.from({length: n + 1}, () => new Array(k + 1).fill(INF))
  dp[0][0] = 0

  for (let i = 1; i <= n; i++) {
    for (let t = 1; t <= Math.min(i >> 1, k); t++) {
      for (let j = 2 * (t - 1); j <= i - 2; j++) {
        if (dp[j][t - 1] < INF) {
          dp[i][t] = Math.min(dp[i][t], dp[j][t - 1] + cost[j][i - 1])
        }
      }
    }
  }

  return dp[n][k]
}
