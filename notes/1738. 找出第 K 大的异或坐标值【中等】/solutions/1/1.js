/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length,
    n = matrix[0].length
  const xor = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  const vals = []
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      xor[i][j] =
        xor[i - 1][j] ^ xor[i][j - 1] ^ xor[i - 1][j - 1] ^ matrix[i - 1][j - 1]
      vals.push(xor[i][j])
    }
  }
  vals.sort((a, b) => b - a)
  return vals[k - 1]
}
