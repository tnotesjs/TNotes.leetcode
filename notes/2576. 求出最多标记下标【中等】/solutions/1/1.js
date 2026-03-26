/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let lo = 0, hi = Math.floor(n / 2)
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    let ok = true
    for (let i = 0; i < mid; i++) {
      if (2 * nums[i] > nums[n - mid + i]) { ok = false; break }
    }
    if (ok) lo = mid; else hi = mid - 1
  }
  return lo * 2
}
