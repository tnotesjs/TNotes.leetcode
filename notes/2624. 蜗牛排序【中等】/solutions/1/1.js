/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {number[][]}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return []
  const ans = Array.from({ length: rowsCount }, () => Array(colsCount))
  for (let i = 0, j = 1, r = 0, c = 0; i < this.length; i++) {
    ans[r][c] = this[i]
    r += j
    if (r === rowsCount || r === -1) {
      r -= j
      j = -j
      c++
    }
  }
  return ans
}
