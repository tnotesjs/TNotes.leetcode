/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const freq = new Map()
  for (const x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1)
    if (freq.get(x) > 2) return false
  }
  return true
}
