/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows
  if (r === 1 || r >= n) {
    return s
  }
  const mat = new Array(r).fill(0)
  for (let i = 0; i < r; ++i) {
    mat[i] = []
  }
  for (let i = 0, x = 0, t = r * 2 - 2; i < n; ++i) {
    mat[x].push(s[i])
    if (i % t < r - 1) {
      ++x
    } else {
      --x
    }
  }
  const ans = []
  for (const row of mat) {
    ans.push(row.join(''))
  }
  return ans.join('')
}
