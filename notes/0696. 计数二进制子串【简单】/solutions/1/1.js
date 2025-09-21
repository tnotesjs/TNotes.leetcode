/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // 统计连续相同字符的长度
  const counts = []
  let count = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++
    } else {
      counts.push(count)
      count = 1
    }
  }
  counts.push(count) // 添加最后一组的计数

  // 计算符合条件的子串个数
  let result = 0
  for (let i = 1; i < counts.length; i++) {
    // 相邻两组能形成的子串个数为两组长度的最小值
    result += Math.min(counts[i], counts[i - 1])
  }

  return result
}
