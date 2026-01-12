/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const result = []

  // 记录访问过的点
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))

  // 扩撒起点
  const queue = [[rCenter, cCenter]]
  visited[rCenter][cCenter] = true

  // 每个点的 4 个扩散方向
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  while (queue.length > 0) {
    const [r, c] = queue.shift()
    result.push([r, c])

    // 遍历所有未访问过的点
    for (const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
        visited[nr][nc] = true
        queue.push([nr, nc])
      }
    }
  }

  return result
}
