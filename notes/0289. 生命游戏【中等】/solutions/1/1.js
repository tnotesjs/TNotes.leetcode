/**
 * @param {number[][]} board
 * @return {void}
 */
var gameOfLife = function (board) {
  const m = board.length,
    n = board[0].length
  const dirs = [-1, 0, 1]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0
      for (const di of dirs) {
        for (const dj of dirs) {
          if (di === 0 && dj === 0) continue
          const ni = i + di,
            nj = j + dj
          if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] & 1)
            live++
        }
      }
      // 第二位记录下一状态
      if (board[i][j] & 1) {
        if (live === 2 || live === 3) board[i][j] |= 2
      } else {
        if (live === 3) board[i][j] |= 2
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1
    }
  }
}
