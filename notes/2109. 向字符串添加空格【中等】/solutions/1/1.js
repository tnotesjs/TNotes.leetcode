/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const res = []
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (j < spaces.length && i === spaces[j]) {
      res.push(' ')
      j++
    }
    res.push(s[i])
  }
  return res.join('')
}
