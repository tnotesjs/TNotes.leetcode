/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    // 反转字母表位置：'a' = 26, 'b' = 25, ..., 'z' = 1
    const reversePos = 26 - (s.charCodeAt(i) - 97)
    // 字符串位置从 1 开始
    const pos = i + 1
    result += reversePos * pos
  }

  return result
}
