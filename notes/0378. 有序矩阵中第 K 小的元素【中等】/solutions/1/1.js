/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length
  let lo = matrix[0][0],
    hi = matrix[n - 1][n - 1]
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    let count = 0,
      j = n - 1
    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i][j] > mid) j--
      count += j + 1
    }
    if (count < k) lo = mid + 1
    else hi = mid
  }
  return lo
}
