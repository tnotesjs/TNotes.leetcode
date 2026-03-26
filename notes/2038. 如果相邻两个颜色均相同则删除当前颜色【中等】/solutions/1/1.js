/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let a = 0,
    b = 0
  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') a++
    else if (
      colors[i] === 'B' &&
      colors[i - 1] === 'B' &&
      colors[i + 1] === 'B'
    )
      b++
  }
  return a > b
}
