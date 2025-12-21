/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
  // 统计每个数字的出现次数
  const freq = new Array(10).fill(0)
  for (const c of s) {
    freq[Number(c)]++
  }

  // 从左到右遍历相邻数字对
  for (let i = 0; i < s.length - 1; i++) {
    const a = Number(s[i])
    const b = Number(s[i + 1])

    // 检查是否合法：两数字不等，且各自出现次数等于自身
    if (a !== b && freq[a] === a && freq[b] === b) {
      return s[i] + s[i + 1]
    }
  }

  return ''
}
