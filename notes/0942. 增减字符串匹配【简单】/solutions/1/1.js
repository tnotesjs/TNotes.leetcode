/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const n = s.length
  let low = 0
  let high = n
  const res = new Array(n + 1)
  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      res[i] = low
      low++
    } else {
      res[i] = high
      high--
    }
  }
  res[n] = low // 此时 low === high
  return res
}
