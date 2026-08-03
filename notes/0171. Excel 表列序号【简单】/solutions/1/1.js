/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0
  for (let i = 0; i < columnTitle.length; i++) {
    // A=1 ... Z=26；从左到右累乘 26
    result = result * 26 + (columnTitle.charCodeAt(i) - 65 + 1)
  }
  return result
}
