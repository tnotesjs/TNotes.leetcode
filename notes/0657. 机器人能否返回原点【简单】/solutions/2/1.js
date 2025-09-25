/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const countCharRegex = (char) =>
    (moves.match(new RegExp(char, 'g')) || []).length
  return (
    countCharRegex('U') === countCharRegex('D') &&
    countCharRegex('R') === countCharRegex('L')
  )
}
