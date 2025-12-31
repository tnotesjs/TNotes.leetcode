/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let max1 = 0
  let max2 = 0
  let min1 = Number.POSITIVE_INFINITY
  let min2 = Number.POSITIVE_INFINITY

  for (const v of nums) {
    if (v >= max1) {
      max2 = max1
      max1 = v
    } else if (v > max2) {
      max2 = v
    }

    if (v <= min1) {
      min2 = min1
      min1 = v
    } else if (v < min2) {
      min2 = v
    }
  }

  return max1 * max2 - min1 * min2
}
