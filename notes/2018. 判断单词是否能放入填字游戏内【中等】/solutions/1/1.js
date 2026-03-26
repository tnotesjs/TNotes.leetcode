/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  const m = board.length,
    n = board[0].length,
    k = word.length
  const check = (seg) => {
    for (let i = 0; i < seg.length; i++) {
      if (seg[i] !== ' ' && seg[i] !== word[i]) return false
    }
    return true
  }
  // 横向检查
  for (let i = 0; i < m; i++) {
    let j = 0
    while (j < n) {
      let start = j
      while (j < n && board[i][j] !== '#') j++
      if (j - start === k) {
        const seg = []
        for (let x = start; x < j; x++) seg.push(board[i][x])
        if (check(seg) || check(seg.reverse())) return true
      }
      j++
    }
  }
  // 纵向检查
  for (let j = 0; j < n; j++) {
    let i = 0
    while (i < m) {
      let start = i
      while (i < m && board[i][j] !== '#') i++
      if (i - start === k) {
        const seg = []
        for (let x = start; x < i; x++) seg.push(board[x][j])
        if (check(seg) || check(seg.reverse())) return true
      }
      i++
    }
  }
  return false
}
