/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  let moves = 0
  while (target > 1 && maxDoubles > 0) {
    if (target % 2 === 1) {
      target--
      moves++
    }
    target = Math.floor(target / 2)
    maxDoubles--
    moves++
  }
  // 剩余只能 +1
  moves += target - 1
  return moves
}
