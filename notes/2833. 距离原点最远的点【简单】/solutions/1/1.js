/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let left = 0,
    right = 0,
    blank = 0

  for (const move of moves) {
    if (move === 'L') left++
    else if (move === 'R') right++
    else blank++
  }

  // 所有 _ 都往使距离最大的方向移动
  return Math.abs(left - right) + blank
}
