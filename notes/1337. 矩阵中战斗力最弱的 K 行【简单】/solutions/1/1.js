/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const strengths = mat.map((row, idx) => {
    let cnt = 0
    for (const v of row) {
      if (v === 1) cnt++
      else break // 后续均为 0（军人出现在最前面，后续都是平民）
    }
    return [cnt, idx]
  })

  return strengths
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]) // 先按军人数量排序，数量相同按行索引排序
    .slice(0, k) // 取前 k 个
    .map(([, idx]) => idx) // 只取行索引
}
