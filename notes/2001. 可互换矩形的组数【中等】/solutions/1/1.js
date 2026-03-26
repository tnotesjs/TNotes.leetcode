/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const map = new Map()
  let count = 0
  for (const [w, h] of rectangles) {
    const g = gcd(w, h)
    const key = w / g + ',' + h / g
    const cnt = map.get(key) || 0
    count += cnt
    map.set(key, cnt + 1)
  }
  return count
}
