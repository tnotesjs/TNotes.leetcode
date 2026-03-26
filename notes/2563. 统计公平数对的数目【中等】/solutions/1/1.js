/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const countLess = (target) => {
    let cnt = 0, lo = 0, hi = n - 1
    while (lo < hi) {
      if (nums[lo] + nums[hi] < target) {
        cnt += hi - lo
        lo++
      } else {
        hi--
      }
    }
    return cnt
  }
  return countLess(upper + 1) - countLess(lower)
}
