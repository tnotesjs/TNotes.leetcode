/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  // 如果两个字符串相等，则不存在特殊序列
  if (a === b) {
    return -1
  }

  // 如果两个字符串不相等，则较长字符串的长度就是答案
  return Math.max(a.length, b.length)
}
