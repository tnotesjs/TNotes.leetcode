var maxIncreasingCells = function (mat) {
  const m = mat.length,
    n = mat[0].length
  const cells = []
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) cells.push([mat[i][j], i, j])
  cells.sort((a, b) => a[0] - b[0])

  const rowMax = new Array(m).fill(0)
  const colMax = new Array(n).fill(0)
  let res = 0,
    i = 0
  while (i < cells.length) {
    let j = i
    while (j < cells.length && cells[j][0] === cells[i][0]) j++
    const updates = []
    for (let k = i; k < j; k++) {
      const [, r, c] = cells[k]
      const val = Math.max(rowMax[r], colMax[c]) + 1
      updates.push([r, c, val])
      res = Math.max(res, val)
    }
    for (const [r, c, val] of updates) {
      rowMax[r] = Math.max(rowMax[r], val)
      colMax[c] = Math.max(colMax[c], val)
    }
    i = j
  }
  return res
}
