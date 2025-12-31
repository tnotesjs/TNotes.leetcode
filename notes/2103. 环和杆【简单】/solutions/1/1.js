/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const mask = Array(10).fill(0)
  const map = { R: 1, G: 2, B: 4 }

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i]
    const rod = rings.charCodeAt(i + 1) - 48 // '0' -> 0
    mask[rod] |= map[color]
  }

  let res = 0
  for (let i = 0; i < 10; i += 1) {
    if (mask[i] === 7) res += 1 // 1|2|4 -> RGB all present
  }
  return res
}
