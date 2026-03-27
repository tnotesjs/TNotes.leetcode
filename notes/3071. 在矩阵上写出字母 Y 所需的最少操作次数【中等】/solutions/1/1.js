/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function(grid) {
  const n = grid.length
  const mid = Math.floor(n / 2)
  const yCount = [0, 0, 0]  // Y 上各数字的计数
  const nCount = [0, 0, 0]  // 非 Y 上各数字的计数

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = grid[i][j]
      const isY = (i <= mid && (j === i || j === n - 1 - i)) || (i >= mid && j === mid)
      if (isY) yCount[v]++
      else nCount[v]++
    }
  }

  const yTotal = yCount[0] + yCount[1] + yCount[2]
  const nTotal = nCount[0] + nCount[1] + nCount[2]
  let minOps = Infinity

  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      if (a === b) continue
      // Y 全变为 a，非 Y 全变为 b
      const ops = (yTotal - yCount[a]) + (nTotal - nCount[b])
      minOps = Math.min(minOps, ops)
    }
  }
  return minOps
}
