/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = []
  let start = 0

  for (let i = 0; i <= s.length; i++) {
    // 当到达字符串末尾或字符发生变化时，检查当前分组
    if (i === s.length || s[i] !== s[start]) {
      // 如果当前分组长度大于等于3，则记录位置
      if (i - start >= 3) {
        result.push([start, i - 1])
      }
      start = i // 更新下一个分组的起始位置
    }
  }

  return result
}
