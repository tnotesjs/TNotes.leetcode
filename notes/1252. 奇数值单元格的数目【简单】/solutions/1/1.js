/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const row = new Array(m).fill(0)
  const col = new Array(n).fill(0)

  for (const [r, c] of indices) {
    row[r] += 1
    col[c] += 1
  }

  let oddRows = 0
  for (const v of row) if (v % 2 === 1) oddRows += 1

  let oddCols = 0
  for (const v of col) if (v % 2 === 1) oddCols += 1

  return oddRows * (n - oddCols) + oddCols * (m - oddRows)
}
