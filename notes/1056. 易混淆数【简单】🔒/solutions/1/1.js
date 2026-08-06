/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  const map = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 }
  let m = n
  let rotated = 0
  while (m > 0) {
    const d = m % 10
    if (map[d] === undefined) return false
    rotated = rotated * 10 + map[d]
    m = Math.floor(m / 10)
  }
  return rotated !== n
}
