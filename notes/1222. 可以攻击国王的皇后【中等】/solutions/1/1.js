/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const board = new Set()
  for (const [r, c] of queens) board.add(r * 8 + c)
  const res = []
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
  for (const [dr, dc] of dirs) {
    let r = king[0] + dr,
      c = king[1] + dc
    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (board.has(r * 8 + c)) {
        res.push([r, c])
        break
      }
      r += dr
      c += dc
    }
  }
  return res
}
