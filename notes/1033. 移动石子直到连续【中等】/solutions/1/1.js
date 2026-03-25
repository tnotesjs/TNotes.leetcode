/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y)
  const [x, y, z] = arr
  if (z - x === 2) return [0, 0]
  const minMoves = y - x <= 2 || z - y <= 2 ? 1 : 2
  const maxMoves = z - x - 2
  return [minMoves, maxMoves]
}
