/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
  const MOD = 1000000007
  const n = pressedKeys.length
  const maxGroup = { 2: 3, 3: 3, 4: 3, 5: 3, 6: 3, 7: 4, 8: 3, 9: 4 }
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    const ch = pressedKeys[i - 1]
    const maxLen = maxGroup[ch]
    for (let j = 1; j <= maxLen && i - j >= 0; j++) {
      if (pressedKeys[i - j] !== ch) break
      dp[i] = (dp[i] + dp[i - j]) % MOD
    }
  }
  return dp[n]
}
