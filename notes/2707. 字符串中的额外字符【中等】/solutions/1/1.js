var minExtraChar = function (s, dictionary) {
  const n = s.length
  const set = new Set(dictionary)
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 0; j < i; j++) {
      if (set.has(s.substring(j, i))) {
        dp[i] = Math.min(dp[i], dp[j])
      }
    }
  }
  return dp[n]
}
