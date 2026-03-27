/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
  const m = grid.length, n = grid[0].length
  // BFS：最小化经过的 1 的个数
  const dist = Array.from({length: m}, () => new Array(n).fill(Infinity))
  dist[0][0] = grid[0][0]
  const dq = [[0, 0]] // 0-1 BFS 双端队列
  let head = 0
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
  // 使用数组模拟双端队列
  const deque = [[0, 0]]
  dist[0][0] = grid[0][0]
  while (deque.length > 0) {
    const [x, y] = deque.shift()
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue
      const nd = dist[x][y] + grid[nx][ny]
      if (nd < dist[nx][ny]) {
        dist[nx][ny] = nd
        if (grid[nx][ny] === 0) deque.unshift([nx, ny])
        else deque.push([nx, ny])
      }
    }
  }
  return dist[m-1][n-1] < health
}
