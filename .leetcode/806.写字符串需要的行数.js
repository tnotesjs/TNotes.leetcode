/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1
  let widthInCurrentLine = 0

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 97 // 'a'的ASCII码是97
    const charWidth = widths[charIndex]

    if (widthInCurrentLine + charWidth > 100) {
      lines++
      widthInCurrentLine = charWidth
    } else {
      widthInCurrentLine += charWidth
    }
  }

  return [lines, widthInCurrentLine]
}
// @lc code=end
