/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
  const m = grid.length, n = grid[0].length
  // prefixX[i][j] = 左上角到 (i,j) 的 X 计数
  const px = Array.from({length: m}, () => new Array(n).fill(0))
  const py = Array.from({length: m}, () => new Array(n).fill(0))
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      px[i][j] = (grid[i][j] === 'X' ? 1 : 0) + (j > 0 ? px[i][j-1] : 0) + (i > 0 ? px[i-1][j] : 0) - (i > 0 && j > 0 ? px[i-1][j-1] : 0)
      py[i][j] = (grid[i][j] === 'Y' ? 1 : 0) + (j > 0 ? py[i][j-1] : 0) + (i > 0 ? py[i-1][j] : 0) - (i > 0 && j > 0 ? py[i-1][j-1] : 0)
      if (px[i][j] > 0 && px[i][j] === py[i][j]) count++
    }
  }
  return count
}
