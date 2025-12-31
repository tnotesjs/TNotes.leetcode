/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const res = []

  for (let i = s.length - 1; i >= 0; ) {
    if (s[i] === '#') {
      const num = Number(s[i - 2] + s[i - 1])
      res.push(String.fromCharCode(96 + num))
      i -= 3
    } else {
      const num = Number(s[i])
      res.push(String.fromCharCode(96 + num))
      i -= 1
    }
  }

  return res.reverse().join('')
}
