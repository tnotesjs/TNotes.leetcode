/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const diff = []

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) diff.push(i)
    if (diff.length > 2) return false
  }

  if (diff.length === 0) return true
  if (diff.length !== 2) return false

  const [i, j] = diff
  return s1[i] === s2[j] && s1[j] === s2[i]
}
