/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const n = s.length
  const result = new Array(n)

  // 从左到右遍历，计算每个位置到左侧最近的c的距离
  let prev = -Infinity
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i
    }
    result[i] = i - prev
  }

  // 从右到左遍历，计算每个位置到右侧最近的c的距离，并取较小值
  prev = Infinity
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i
    }
    result[i] = Math.min(result[i], prev - i)
  }

  return result
}
