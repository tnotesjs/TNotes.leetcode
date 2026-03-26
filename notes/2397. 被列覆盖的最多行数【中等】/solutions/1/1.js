/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function (matrix, numSelect) {
  const m = matrix.length,
    n = matrix[0].length
  const rows = matrix.map((row) => {
    let mask = 0
    for (let j = 0; j < n; j++) if (row[j]) mask |= 1 << j
    return mask
  })
  let ans = 0
  for (let mask = 0; mask < 1 << n; mask++) {
    let bits = 0,
      x = mask
    while (x) {
      bits++
      x &= x - 1
    }
    if (bits !== numSelect) continue
    let count = 0
    for (const row of rows) {
      if ((row & mask) === row) count++
    }
    ans = Math.max(ans, count)
  }
  return ans
}
