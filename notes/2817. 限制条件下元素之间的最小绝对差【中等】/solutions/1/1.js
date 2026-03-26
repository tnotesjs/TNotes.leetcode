/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  const sorted = []
  let ans = Infinity
  const bisect = (arr, val) => {
    let lo = 0,
      hi = arr.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (arr[mid] < val) lo = mid + 1
      else hi = mid
    }
    return lo
  }
  for (let i = x; i < nums.length; i++) {
    const pos = bisect(sorted, nums[i - x])
    sorted.splice(pos, 0, nums[i - x])
    const idx = bisect(sorted, nums[i])
    if (idx < sorted.length) ans = Math.min(ans, sorted[idx] - nums[i])
    if (idx > 0) ans = Math.min(ans, nums[i] - sorted[idx - 1])
  }
  return ans
}
