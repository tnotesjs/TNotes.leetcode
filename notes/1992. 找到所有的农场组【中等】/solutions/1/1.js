/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const m = land.length,
    n = land[0].length
  const res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 1) {
        let r2 = i,
          c2 = j
        while (r2 + 1 < m && land[r2 + 1][j] === 1) r2++
        while (c2 + 1 < n && land[i][c2 + 1] === 1) c2++
        res.push([i, j, r2, c2])
        for (let r = i; r <= r2; r++)
          for (let c = j; c <= c2; c++) land[r][c] = 0
      }
    }
  }
  return res
}
