/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const m = rowSum.length,
    n = colSum.length
  const res = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      const v = Math.min(rowSum[i], colSum[j])
      res[i][j] = v
      rowSum[i] -= v
      colSum[j] -= v
    }
  return res
}
