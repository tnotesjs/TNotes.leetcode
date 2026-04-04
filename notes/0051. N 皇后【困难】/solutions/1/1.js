/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const queens = new Array(n).fill(0)
  const limit = (1 << n) - 1

  const buildBoard = () =>
    queens.map((col) => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))

  const dfs = (row, cols, diag1, diag2) => {
    if (row === n) {
      res.push(buildBoard())
      return
    }

    let available = limit & ~(cols | diag1 | diag2)
    while (available !== 0) {
      const bit = available & -available
      available ^= bit
      queens[row] = 31 - Math.clz32(bit) // 或 queens[row] = Math.log2(bit)
      dfs(
        row + 1,
        cols | bit,
        ((diag1 | bit) << 1) & limit,
        (diag2 | bit) >>> 1,
      )
    }
  }

  dfs(0, 0, 0, 0)
  return res
}
