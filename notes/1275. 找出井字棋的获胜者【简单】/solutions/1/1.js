var checkWinner = function (counts, idx, delta) {
  counts[idx] += delta
  return counts[idx] === 3 || counts[idx] === -3
}

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const rows = [0, 0, 0]
  const cols = [0, 0, 0]
  let diag = 0
  let anti = 0

  for (let i = 0; i < moves.length; i += 1) {
    const [r, c] = moves[i]
    const delta = i % 2 === 0 ? 1 : -1 // A:+1, B:-1

    if (checkWinner(rows, r, delta)) return delta === 1 ? 'A' : 'B'
    if (checkWinner(cols, c, delta)) return delta === 1 ? 'A' : 'B'

    if (r === c) {
      diag += delta
      if (diag === 3 || diag === -3) return delta === 1 ? 'A' : 'B'
    }

    if (r + c === 2) {
      anti += delta
      if (anti === 3 || anti === -3) return delta === 1 ? 'A' : 'B'
    }
  }

  return moves.length === 9 ? 'Draw' : 'Pending'
}
