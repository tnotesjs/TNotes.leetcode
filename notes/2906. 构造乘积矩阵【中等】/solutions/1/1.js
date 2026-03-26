/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
  const n = grid.length, m = grid[0].length
  const MOD = 12345
  const p = Array.from({length: n}, () => new Array(m))

  // 后缀积
  let suf = 1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      p[i][j] = suf
      suf = suf * (grid[i][j] % MOD) % MOD
    }
  }

  // 前缀积
  let pre = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      p[i][j] = p[i][j] * pre % MOD
      pre = pre * (grid[i][j] % MOD) % MOD
    }
  }

  return p
}
