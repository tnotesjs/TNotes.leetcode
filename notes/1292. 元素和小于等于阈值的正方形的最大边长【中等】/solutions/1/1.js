/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length,
    n = mat[0].length
  // 二维前缀和
  const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] =
        mat[i - 1][j - 1] +
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1]
    }
  }
  const getSum = (r1, c1, r2, c2) => {
    return (
      prefix[r2 + 1][c2 + 1] -
      prefix[r1][c2 + 1] -
      prefix[r2 + 1][c1] +
      prefix[r1][c1]
    )
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从当前答案+1开始尝试增大边长
      for (let k = ans + 1; i + k <= m && j + k <= n; k++) {
        if (getSum(i, j, i + k - 1, j + k - 1) <= threshold) {
          ans = k
        } else {
          break
        }
      }
    }
  }
  return ans
}
