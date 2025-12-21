/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const n = colors.length
  let count = 0

  for (let i = 0; i < n; i++) {
    const prev = colors[(i - 1 + n) % n]
    const curr = colors[i]
    const next = colors[(i + 1) % n]

    // 中间瓷砖与左右两边颜色都不同
    if (curr !== prev && curr !== next) {
      count++
    }
  }

  return count
}
