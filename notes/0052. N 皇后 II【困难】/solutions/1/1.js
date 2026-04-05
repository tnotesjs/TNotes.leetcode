/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const limit = (1 << n) - 1
  let count = 0

  const dfs = (row, cols, diag1, diag2) => {
    if (row === n) {
      count++
      return
    }

    let available = limit & ~(cols | diag1 | diag2)
    while (available !== 0) {
      const bit = available & -available
      available ^= bit
      dfs(
        row + 1,
        cols | bit,
        ((diag1 | bit) << 1) & limit,
        (diag2 | bit) >>> 1,
      )
    }
  }

  dfs(0, 0, 0, 0)
  return count
}
