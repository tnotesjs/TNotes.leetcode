/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel 表列名称
 */

// @lc code=start
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
// @lc code=end

// #region 1
/* 
时间复杂度：O(log₂₆N)，其中N是给定的列号，因为每次循环都将数字除以26
空间复杂度：O(1)，除了结果字符串外，只使用了常数级别的额外空间
*/
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
// #endregion
