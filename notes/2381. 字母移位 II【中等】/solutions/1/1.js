/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length
  const diff = new Array(n + 1).fill(0)
  for (const [start, end, direction] of shifts) {
    const d = direction === 1 ? 1 : -1
    diff[start] += d
    diff[end + 1] -= d
  }
  const result = []
  let shift = 0
  for (let i = 0; i < n; i++) {
    shift += diff[i]
    const c = (s.charCodeAt(i) - 97 + (shift % 26) + 26) % 26
    result.push(String.fromCharCode(c + 97))
  }
  return result.join('')
}
