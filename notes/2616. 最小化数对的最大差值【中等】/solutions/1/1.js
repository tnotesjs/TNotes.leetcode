/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  if (p === 0) return 0
  nums.sort((a, b) => a - b)
  let lo = 0,
    hi = nums[nums.length - 1] - nums[0]
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let cnt = 0
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] <= mid) {
        cnt++
        i++ // 跳过下一个
      }
    }
    if (cnt >= p) hi = mid
    else lo = mid + 1
  }
  return lo
}
