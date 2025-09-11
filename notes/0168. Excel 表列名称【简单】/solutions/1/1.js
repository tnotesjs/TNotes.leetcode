/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = ''

  while (columnNumber > 0) {
    // 因为是从 1 开始而不是 0，所以需要减 1
    columnNumber--
    // 获取当前位对应的字符
    result = String.fromCharCode((columnNumber % 26) + 65) + result
    // 更新数字
    columnNumber = Math.floor(columnNumber / 26)
  }

  return result
}
