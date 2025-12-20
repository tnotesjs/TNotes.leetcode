/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length
  const m = strs[0].length
  let del = 0
  for (let c = 0; c < m; c++) {
    for (let r = 1; r < n; r++) {
      if (strs[r - 1][c] > strs[r][c]) {
        del++
        break
      }
    }
  }
  return del
}
