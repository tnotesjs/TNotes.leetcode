/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // rows[i] / cols[j] / boxes[k] 分别用位运算记录数字出现情况
  const rows = Array.from({ length: 9 }, () => 0)
  const cols = Array.from({ length: 9 }, () => 0)
  const boxes = Array.from({ length: 9 }, () => 0)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue
      const num = board[i][j] - '0' // 1~9
      const bit = 1 << num
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (rows[i] & bit || cols[j] & bit || boxes[boxIdx] & bit) return false
      rows[i] |= bit
      cols[j] |= bit
      boxes[boxIdx] |= bit
    }
  }
  return true
}
