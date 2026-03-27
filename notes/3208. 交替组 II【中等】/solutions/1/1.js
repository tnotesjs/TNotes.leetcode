/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
  const n = colors.length
  let count = 0
  let len = 1
  // 环形：遍历 n + k - 2 次
  for (let i = 1; i < n + k - 1; i++) {
    if (colors[i % n] !== colors[(i - 1) % n]) {
      len++
    } else {
      len = 1
    }
    if (len >= k) count++
  }
  return count
}
