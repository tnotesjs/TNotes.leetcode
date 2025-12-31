/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const col = coordinates.charCodeAt(0) - 97 // 'a' -> 0
  const row = coordinates.charCodeAt(1) - 48 // '1' -> 1
  return ((col + row) & 1) === 1
}
