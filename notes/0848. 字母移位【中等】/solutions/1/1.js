/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length
  let total = 0
  const res = [...s]
  for (let i = n - 1; i >= 0; i--) {
    total = (total + shifts[i]) % 26
    res[i] = String.fromCharCode(((s.charCodeAt(i) - 97 + total) % 26) + 97)
  }
  return res.join('')
}
