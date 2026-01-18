/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0
  let inPair = false // 标记当前是否在竖线对之间

  for (const char of s) {
    if (char === '|') {
      inPair = !inPair // 切换状态
    } else if (char === '*' && !inPair) {
      count++ // 不在竖线对之间时统计星号
    }
  }

  return count
}
