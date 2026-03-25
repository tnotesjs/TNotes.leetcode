/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const m = mat.length,
    n = mat[0].length
  // heights[i][j]: 从 (i,j) 向左连续 1 的个数
  const heights = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      heights[i][j] = mat[i][j] === 0 ? 0 : j > 0 ? heights[i][j - 1] + 1 : 1
  let res = 0
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      let minW = heights[i][j]
      for (let k = i; k >= 0 && minW > 0; k--) {
        minW = Math.min(minW, heights[k][j])
        res += minW
      }
    }
  return res
}
