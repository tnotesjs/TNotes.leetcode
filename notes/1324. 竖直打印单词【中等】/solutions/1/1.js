/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const words = s.split(' ')
  const maxLen = Math.max(...words.map((w) => w.length))
  const res = []
  for (let i = 0; i < maxLen; i++) {
    let row = ''
    for (const word of words) {
      row += i < word.length ? word[i] : ' '
    }
    res.push(row.trimEnd())
  }
  return res
}
