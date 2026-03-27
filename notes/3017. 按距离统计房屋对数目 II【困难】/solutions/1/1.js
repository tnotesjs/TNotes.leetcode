/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function(n, x, y) {
  if (x > y) { let t = x; x = y; y = t }
  const result = new Array(n).fill(0)
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const direct = j - i
      const viaXY = Math.abs(i - x) + 1 + Math.abs(j - y)
      const viaYX = Math.abs(i - y) + 1 + Math.abs(j - x)
      const dist = Math.min(direct, viaXY, viaYX)
      result[dist - 1] += 2
    }
  }
  return result
}
