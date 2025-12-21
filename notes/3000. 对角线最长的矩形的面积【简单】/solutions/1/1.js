/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagSq = 0 // 对角线长度的平方
  let maxArea = 0
  for (const [l, w] of dimensions) {
    const diagSq = l * l + w * w
    const area = l * w
    // 对角线更长，或者对角线相等但面积更大
    if (diagSq > maxDiagSq || (diagSq === maxDiagSq && area > maxArea)) {
      maxDiagSq = diagSq
      maxArea = area
    }
  }
  return maxArea
}
