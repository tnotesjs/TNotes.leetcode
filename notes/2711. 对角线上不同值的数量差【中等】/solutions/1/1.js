var differenceOfDistinctValues = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const answer = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const topLeft = new Set()
      let i = r - 1,
        j = c - 1
      while (i >= 0 && j >= 0) {
        topLeft.add(grid[i][j])
        i--
        j--
      }
      const bottomRight = new Set()
      i = r + 1
      j = c + 1
      while (i < m && j < n) {
        bottomRight.add(grid[i][j])
        i++
        j++
      }
      answer[r][c] = Math.abs(topLeft.size - bottomRight.size)
    }
  }
  return answer
}
