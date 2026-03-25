/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  if (nums.length % k !== 0) return false
  const cnt = new Map()
  for (const num of nums) cnt.set(num, (cnt.get(num) || 0) + 1)
  const sorted = [...cnt.keys()].sort((a, b) => a - b)
  for (const start of sorted) {
    const c = cnt.get(start)
    if (c > 0) {
      for (let i = 0; i < k; i++) {
        const val = start + i
        if ((cnt.get(val) || 0) < c) return false
        cnt.set(val, cnt.get(val) - c)
      }
    }
  }
  return true
}
