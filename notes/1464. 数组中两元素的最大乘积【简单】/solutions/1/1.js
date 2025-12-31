/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = -Infinity // 最大值
  let max2 = -Infinity // 次大值
  for (const v of nums) {
    if (v > max1) {
      max2 = max1
      max1 = v
    } else if (v > max2) {
      max2 = v
    }
  }
  return (max1 - 1) * (max2 - 1)
}
