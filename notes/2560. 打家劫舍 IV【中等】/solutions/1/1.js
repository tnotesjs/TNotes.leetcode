/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let lo = Math.min(...nums), hi = Math.max(...nums)
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let cnt = 0, prev = false
    for (const x of nums) {
      if (x <= mid && !prev) {
        cnt++
        prev = true
      } else {
        prev = false
      }
    }
    if (cnt >= k) hi = mid
    else lo = mid + 1
  }
  return lo
}
