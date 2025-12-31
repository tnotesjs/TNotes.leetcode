/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  const n = arr.length
  const need = m * k

  for (let i = 0; i + need <= n; i++) {
    let ok = true
    for (let offset = 0; offset < m; offset++) {
      for (let rep = 1; rep < k; rep++) {
        if (arr[i + offset] !== arr[i + rep * m + offset]) {
          ok = false
          break
        }
      }
      if (!ok) break
    }
    if (ok) return true
  }

  return false
}
