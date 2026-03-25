/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ] // N, E, S, W
  let x = 0,
    y = 0,
    d = 0
  for (const c of instructions) {
    if (c === 'G') {
      x += dirs[d][0]
      y += dirs[d][1]
    } else if (c === 'L') {
      d = (d + 3) % 4
    } else {
      d = (d + 1) % 4
    }
  }
  return (x === 0 && y === 0) || d !== 0
}
