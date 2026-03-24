/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const count = (bound) => {
    let res = 0,
      cur = 0
    for (const num of nums) {
      cur = num <= bound ? cur + 1 : 0
      res += cur
    }
    return res
  }
  return count(right) - count(left - 1)
}
