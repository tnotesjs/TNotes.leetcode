/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length,
    n = mat[0].length
  // 二维前缀和
  const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      prefix[i + 1][j + 1] =
        mat[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j]
  const ans = Array.from({ length: m }, () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const r1 = Math.max(0, i - k),
        c1 = Math.max(0, j - k)
      const r2 = Math.min(m - 1, i + k),
        c2 = Math.min(n - 1, j + k)
      ans[i][j] =
        prefix[r2 + 1][c2 + 1] -
        prefix[r1][c2 + 1] -
        prefix[r2 + 1][c1] +
        prefix[r1][c1]
    }
  }
  return ans
}
