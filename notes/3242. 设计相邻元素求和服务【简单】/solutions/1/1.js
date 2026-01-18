/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.grid = grid
  this.n = grid.length
  // 用哈希表记录每个值的位置
  this.pos = new Map()
  for (let i = 0; i < this.n; i++) {
    for (let j = 0; j < this.n; j++) {
      this.pos.set(grid[i][j], [i, j])
    }
  }
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  const [r, c] = this.pos.get(value)
  let sum = 0
  // 上下左右
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (const [dr, dc] of dirs) {
    const nr = r + dr
    const nc = c + dc
    if (nr >= 0 && nr < this.n && nc >= 0 && nc < this.n) {
      sum += this.grid[nr][nc]
    }
  }
  return sum
}

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  const [r, c] = this.pos.get(value)
  let sum = 0
  // 四个对角线方向
  const dirs = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ]
  for (const [dr, dc] of dirs) {
    const nr = r + dr
    const nc = c + dc
    if (nr >= 0 && nr < this.n && nc >= 0 && nc < this.n) {
      sum += this.grid[nr][nc]
    }
  }
  return sum
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
