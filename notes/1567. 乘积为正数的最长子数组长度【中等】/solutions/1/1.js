/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let pos = 0,
    neg = 0,
    res = 0
  for (const x of nums) {
    if (x > 0) {
      pos++
      neg = neg > 0 ? neg + 1 : 0
    } else if (x < 0) {
      const newPos = neg > 0 ? neg + 1 : 0
      const newNeg = pos + 1
      pos = newPos
      neg = newNeg
    } else {
      pos = neg = 0
    }
    res = Math.max(res, pos)
  }
  return res
}
