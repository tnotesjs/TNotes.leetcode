/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const m = maze.length,
    n = maze[0].length
  const queue = [[entrance[0], entrance[1], 0]]
  maze[entrance[0]][entrance[1]] = '+'
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  while (queue.length) {
    const [r, c, d] = queue.shift()
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && maze[nr][nc] === '.') {
        if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) return d + 1
        maze[nr][nc] = '+'
        queue.push([nr, nc, d + 1])
      }
    }
  }
  return -1
}
