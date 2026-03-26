/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const diff = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))
  for (const [r1, c1, r2, c2] of queries) {
    diff[r1][c1]++
    diff[r1][c2 + 1]--
    diff[r2 + 1][c1]--
    diff[r2 + 1][c2 + 1]++
  }
  const mat = Array.from({ length: n }, () => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] +=
        (i > 0 ? diff[i - 1][j] : 0) +
        (j > 0 ? diff[i][j - 1] : 0) -
        (i > 0 && j > 0 ? diff[i - 1][j - 1] : 0)
      mat[i][j] = diff[i][j]
    }
  }
  return mat
}
