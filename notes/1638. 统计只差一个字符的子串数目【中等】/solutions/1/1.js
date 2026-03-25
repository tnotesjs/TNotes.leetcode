/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  let res = 0
  for (let i = 0; i < s.length; i++)
    for (let j = 0; j < t.length; j++) {
      let diff = 0
      for (let k = 0; i + k < s.length && j + k < t.length; k++) {
        if (s[i + k] !== t[j + k]) diff++
        if (diff > 1) break
        if (diff === 1) res++
      }
    }
  return res
}
