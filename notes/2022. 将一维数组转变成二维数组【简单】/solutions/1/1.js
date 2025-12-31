/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return []

  const ans = new Array(m)
  for (let i = 0; i < m; i += 1) {
    const row = new Array(n)
    for (let j = 0; j < n; j += 1) {
      row[j] = original[i * n + j]
    }
    ans[i] = row
  }

  return ans
}
