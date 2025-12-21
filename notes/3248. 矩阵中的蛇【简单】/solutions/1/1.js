/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let row = 0
  let col = 0

  for (const cmd of commands) {
    if (cmd === 'UP') row--
    else if (cmd === 'DOWN') row++
    else if (cmd === 'LEFT') col--
    else if (cmd === 'RIGHT') col++
  }

  // 位置公式：(row * n) + col
  return row * n + col
}
