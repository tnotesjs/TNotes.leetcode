/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const n = s.length
  const result = new Array(n).fill(Infinity)

  // 找到所有c的位置
  const positions = []
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      positions.push(i)
    }
  }

  // 对每个c的位置，向两边扩展更新距离
  for (const pos of positions) {
    for (let i = 0; i < n; i++) {
      result[i] = Math.min(result[i], Math.abs(i - pos))
    }
  }

  return result
}
