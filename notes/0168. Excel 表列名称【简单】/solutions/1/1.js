/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = ''
  while (columnNumber > 0) {
    // 1-indexed → 0-indexed，才能按普通 26 进制取模
    columnNumber--
    result = String.fromCharCode((columnNumber % 26) + 65) + result
    columnNumber = Math.floor(columnNumber / 26)
  }
  return result
}
