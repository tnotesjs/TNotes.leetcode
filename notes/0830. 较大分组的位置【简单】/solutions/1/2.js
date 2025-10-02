/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = []
  let i = 0

  while (i < s.length) {
    const j = i
    // 找到当前分组的结束位置
    while (i < s.length && s[i] === s[j]) {
      i++
    }
    // 如果当前分组长度大于等于3，则记录位置
    if (i - j >= 3) {
      result.push([j, i - 1])
    }
  }

  return result
}
