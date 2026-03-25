/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length,
    m = strs[0].length
  let deletions = 0
  // sorted[i] 表示 strs[i] 是否已经严格小于 strs[i+1]
  const sorted = new Array(n - 1).fill(false)

  for (let j = 0; j < m; j++) {
    let canKeep = true
    for (let i = 0; i < n - 1; i++) {
      if (!sorted[i] && strs[i][j] > strs[i + 1][j]) {
        canKeep = false
        break
      }
    }
    if (!canKeep) {
      deletions++
    } else {
      for (let i = 0; i < n - 1; i++) {
        if (strs[i][j] < strs[i + 1][j]) sorted[i] = true
      }
    }
  }

  return deletions
}
