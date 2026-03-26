/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let res = 0,
    cnt = 0
  for (const num of nums) {
    if (num === 0) {
      cnt++
      res += cnt
    } else {
      cnt = 0
    }
  }
  return res
}
