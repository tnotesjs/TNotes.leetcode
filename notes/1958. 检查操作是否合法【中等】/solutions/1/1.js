/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function (board, rMove, cMove, color) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ]
  for (const [dr, dc] of dirs) {
    let r = rMove + dr,
      c = cMove + dc,
      len = 1
    while (
      r >= 0 &&
      r < 8 &&
      c >= 0 &&
      c < 8 &&
      board[r][c] !== '.' &&
      board[r][c] !== color
    ) {
      r += dr
      c += dc
      len++
    }
    if (len >= 2 && r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === color)
      return true
  }
  return false
}
