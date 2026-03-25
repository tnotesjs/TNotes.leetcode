/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
  const n = arr1.length
  let res = 0
  // 展开绝对值，4 种组合
  for (const [p, q] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]) {
    let minVal = Infinity
    for (let i = 0; i < n; i++) {
      const val = p * arr1[i] + q * arr2[i] + i
      res = Math.max(res, val - minVal)
      minVal = Math.min(minVal, val)
    }
  }
  return res
}
