/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let xCnt = 0,
    oCnt = 0
  for (const row of board) {
    for (const c of row) {
      if (c === 'X') xCnt++
      else if (c === 'O') oCnt++
    }
  }
  if (xCnt !== oCnt && xCnt !== oCnt + 1) return false
  const wins = (ch) => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === ch && board[i][1] === ch && board[i][2] === ch)
        return true
      if (board[0][i] === ch && board[1][i] === ch && board[2][i] === ch)
        return true
    }
    if (board[0][0] === ch && board[1][1] === ch && board[2][2] === ch)
      return true
    if (board[0][2] === ch && board[1][1] === ch && board[2][0] === ch)
      return true
    return false
  }
  if (wins('X') && xCnt === oCnt) return false
  if (wins('O') && xCnt === oCnt + 1) return false
  return true
}
