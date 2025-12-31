/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length

  const equal = (a, b) => {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (a[i][j] !== b[i][j]) return false
      }
    }
    return true
  }

  const rotate = (m) => {
    const res = Array.from({ length: n }, () => Array(n))
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        res[j][n - 1 - i] = m[i][j]
      }
    }
    return res
  }

  let cur = mat
  for (let k = 0; k < 4; k += 1) {
    if (equal(cur, target)) return true
    cur = rotate(cur)
  }
  return false
}
