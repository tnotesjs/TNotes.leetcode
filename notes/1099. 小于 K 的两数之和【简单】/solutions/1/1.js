/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b)
  let l = 0,
    r = nums.length - 1,
    best = -1
  while (l < r) {
    const s = nums[l] + nums[r]
    if (s < k) {
      if (s > best) best = s
      l++
    } else {
      r--
    }
  }
  return best
}
