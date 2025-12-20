/**
 * @param {string[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let rx = -1,
    ry = -1
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        rx = i
        ry = j
        break
      }
    }
    if (rx !== -1) break
  }

  let count = 0
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  for (const [dx, dy] of dirs) {
    let x = rx + dx,
      y = ry + dy
    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      const cell = board[x][y]
      if (cell === 'B') break
      if (cell === 'p') {
        count++
        break
      }
      x += dx
      y += dy
    }
  }

  return count
}
