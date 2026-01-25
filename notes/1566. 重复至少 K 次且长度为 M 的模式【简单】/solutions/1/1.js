/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  const n = arr.length
  const need = m * k

  // 遍历所有可能的起始位置 i
  for (let i = 0; i + need <= n; i++) {
    let ok = true
    // 检查模式的每个位置 offset（0 到 m-1）
    for (let offset = 0; offset < m; offset++) {
      // 检查重复的 k 次
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
