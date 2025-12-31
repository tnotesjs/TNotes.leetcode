/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {}

// 统计每行军人数，再按(人数, 行号)排序取前 k
var kWeakestRows = function (mat, k) {
  const strengths = mat.map((row, idx) => {
    let cnt = 0
    for (const v of row) {
      if (v === 1) cnt++
      else break // 后续均为 0
    }
    return [cnt, idx]
  })

  strengths.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })

  return strengths.slice(0, k).map(([, idx]) => idx)
}
