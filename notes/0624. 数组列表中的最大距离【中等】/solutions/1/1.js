/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let minVal = arrays[0][0]
  let maxVal = arrays[0][arrays[0].length - 1]
  let res = 0
  for (let i = 1; i < arrays.length; i++) {
    const curMin = arrays[i][0]
    const curMax = arrays[i][arrays[i].length - 1]
    res = Math.max(res, Math.abs(curMax - minVal), Math.abs(maxVal - curMin))
    minVal = Math.min(minVal, curMin)
    maxVal = Math.max(maxVal, curMax)
  }
  return res
}
