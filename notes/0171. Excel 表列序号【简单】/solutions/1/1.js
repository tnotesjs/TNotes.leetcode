/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0

  for (let i = 0; i < columnTitle.length; i++) {
    // 将每个字符转换为对应的数字（A=1, B=2, ..., Z=26）
    const charValue = columnTitle.charCodeAt(i) - 65 + 1
    // 每向左移动一位，结果乘以26再加上当前位的值
    result = result * 26 + charValue
  }

  return result
}
