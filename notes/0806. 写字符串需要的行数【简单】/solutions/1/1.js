/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1 // 至少需要一行
  let currentWidth = 0 // 当前行已使用的宽度

  for (const char of s) {
    // 获取当前字符的宽度
    const charWidth = widths[char.charCodeAt(0) - 'a'.charCodeAt(0)]

    // 如果加上当前字符会超过一行的最大宽度，则换行
    if (currentWidth + charWidth > 100) {
      lines++
      currentWidth = charWidth
    } else {
      currentWidth += charWidth
    }
  }

  return [lines, currentWidth]
}
