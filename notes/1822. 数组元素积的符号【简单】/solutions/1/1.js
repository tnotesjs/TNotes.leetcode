/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let neg = 0

  for (const v of nums) {
    if (v === 0) return 0
    if (v < 0) neg += 1
  }

  return neg % 2 === 0 ? 1 : -1
}
