/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const map = new Map()
  let max = 0
  for (const row of matrix) {
    // normalize: if first element is 1, flip
    const key = row[0] === 0 ? row.join(',') : row.map((v) => v ^ 1).join(',')
    const cnt = (map.get(key) || 0) + 1
    map.set(key, cnt)
    if (cnt > max) max = cnt
  }
  return max
}
