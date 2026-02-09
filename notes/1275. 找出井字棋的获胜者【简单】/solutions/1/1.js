/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  // 创建3x3棋盘
  const board = Array(3)
    .fill()
    .map(() => Array(3).fill(0))

  // A用1表示，B用-1表示
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i]
    // A先手（偶数步），B后手（奇数步）
    board[row][col] = i % 2 === 0 ? 1 : -1
  }

  // 检查行
  for (let i = 0; i < 3; i++) {
    if (Math.abs(board[i][0] + board[i][1] + board[i][2]) === 3) {
      return board[i][0] === 1 ? 'A' : 'B'
    }
  }

  // 检查列
  for (let j = 0; j < 3; j++) {
    if (Math.abs(board[0][j] + board[1][j] + board[2][j]) === 3) {
      return board[0][j] === 1 ? 'A' : 'B'
    }
  }

  // 检查对角线
  if (Math.abs(board[0][0] + board[1][1] + board[2][2]) === 3) {
    return board[0][0] === 1 ? 'A' : 'B'
  }
  if (Math.abs(board[0][2] + board[1][1] + board[2][0]) === 3) {
    return board[0][2] === 1 ? 'A' : 'B'
  }

  // 检查是否平局
  if (moves.length === 9) {
    return 'Draw'
  }

  // 游戏未结束
  return 'Pending'
}
// 2025.12.30
// Accepted
// 101/101 cases passed (0 ms)
// Your runtime beats 100 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (51.9 MB)
