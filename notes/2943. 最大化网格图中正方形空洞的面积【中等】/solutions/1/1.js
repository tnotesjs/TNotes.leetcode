/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
  const maxGap = (bars) => {
    bars.sort((a, b) => a - b)
    let maxLen = 1,
      cur = 1
    for (let i = 1; i < bars.length; i++) {
      cur = bars[i] === bars[i - 1] + 1 ? cur + 1 : 1
      maxLen = Math.max(maxLen, cur)
    }
    return maxLen + 1
  }
  const side = Math.min(maxGap(hBars), maxGap(vBars))
  return side * side
}
