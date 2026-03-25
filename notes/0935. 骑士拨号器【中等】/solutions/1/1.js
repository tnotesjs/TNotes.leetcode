/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  const MOD = 1e9 + 7
  const moves = [
    [4, 6], // 0
    [6, 8], // 1
    [7, 9], // 2
    [4, 8], // 3
    [0, 3, 9], // 4
    [], // 5
    [0, 1, 7], // 6
    [2, 6], // 7
    [1, 3], // 8
    [2, 4], // 9
  ]

  let dp = new Array(10).fill(1)

  for (let step = 1; step < n; step++) {
    const next = new Array(10).fill(0)
    for (let i = 0; i < 10; i++) {
      for (const j of moves[i]) {
        next[i] = (next[i] + dp[j]) % MOD
      }
    }
    dp = next
  }

  let res = 0
  for (const x of dp) res = (res + x) % MOD
  return res
}
