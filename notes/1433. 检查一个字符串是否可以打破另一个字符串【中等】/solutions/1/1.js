/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
  const a = [...s1].sort()
  const b = [...s2].sort()
  let s1Breaks = true,
    s2Breaks = true
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) s1Breaks = false
    if (b[i] < a[i]) s2Breaks = false
  }
  return s1Breaks || s2Breaks
}
