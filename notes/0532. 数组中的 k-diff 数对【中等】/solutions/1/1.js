/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const freq = new Map()
  for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1)
  let count = 0
  for (const [num, cnt] of freq) {
    if (k === 0) {
      if (cnt > 1) count++
    } else if (freq.has(num + k)) count++
  }
  return count
}
