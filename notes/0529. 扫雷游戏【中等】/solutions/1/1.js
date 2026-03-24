/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const m = board.length,
    n = board[0].length
  const [r, c] = click
  if (board[r][c] === 'M') {
    board[r][c] = 'X'
    return board
  }
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  const dfs = (i, j) => {
    let mines = 0
    for (const [di, dj] of dirs) {
      const ni = i + di,
        nj = j + dj
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] === 'M')
        mines++
    }
    if (mines > 0) {
      board[i][j] = String(mines)
      return
    }
    board[i][j] = 'B'
    for (const [di, dj] of dirs) {
      const ni = i + di,
        nj = j + dj
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] === 'E')
        dfs(ni, nj)
    }
  }
  dfs(r, c)
  return board
}
