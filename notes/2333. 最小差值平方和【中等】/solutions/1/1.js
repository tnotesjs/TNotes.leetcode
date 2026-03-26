/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
  const n = nums1.length
  const diff = new Array(n)
  for (let i = 0; i < n; i++) diff[i] = Math.abs(nums1[i] - nums2[i])
  let k = k1 + k2
  // 二分查找目标水平线
  let lo = 0,
    hi = 100001
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let need = 0
    for (let i = 0; i < n; i++) {
      if (diff[i] > mid) need += diff[i] - mid
    }
    if (need <= k) hi = mid
    else lo = mid + 1
  }
  const target = lo
  let remaining = k
  for (let i = 0; i < n; i++) {
    if (diff[i] > target) {
      remaining -= diff[i] - target
      diff[i] = target
    }
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    let d = diff[i]
    if (d === target && remaining > 0 && target > 0) {
      d--
      remaining--
    }
    res += d * d
  }
  return res
}
