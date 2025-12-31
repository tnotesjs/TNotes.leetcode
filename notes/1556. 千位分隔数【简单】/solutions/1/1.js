/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const s = String(n)
  let group = 0
  const res = []

  for (let i = s.length - 1; i >= 0; i--) {
    res.push(s[i])
    group++
    if (group === 3 && i !== 0) {
      res.push('.')
      group = 0
    }
  }

  return res.reverse().join('')
}
