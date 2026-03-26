/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let j = 0
  for (let i = 0; i < s.length && j < t.length; i++) {
    if (s[i] === t[j]) j++
  }
  return t.length - j
}
