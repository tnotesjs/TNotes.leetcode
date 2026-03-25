/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
  const n = colsum.length
  const row0 = new Array(n).fill(0)
  const row1 = new Array(n).fill(0)
  // 先处理 colsum 为 2 的列
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 2) {
      row0[i] = 1
      row1[i] = 1
      upper--
      lower--
    }
  }
  // 再处理 colsum 为 1 的列
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 1) {
      if (upper > lower) {
        row0[i] = 1
        upper--
      } else {
        row1[i] = 1
        lower--
      }
    }
  }
  if (upper !== 0 || lower !== 0) return []
  return [row0, row1]
}
