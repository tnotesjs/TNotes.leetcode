/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let prev = 0 // 前一组连续字符的长度
  let curr = 1 // 当前组连续字符的长度
  let result = 0

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++
    } else {
      result += Math.min(prev, curr)
      prev = curr
      curr = 1
    }
  }

  // 处理最后一组
  result += Math.min(prev, curr)

  return result
}
