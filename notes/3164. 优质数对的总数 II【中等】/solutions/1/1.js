/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  // 统计 nums1 中每个数的因子
  const cnt1 = new Map()
  for (const x of nums1) {
    if (x % k !== 0) continue
    const val = x / k
    for (let d = 1; d * d <= val; d++) {
      if (val % d === 0) {
        cnt1.set(d, (cnt1.get(d) || 0) + 1)
        if (d !== val / d) cnt1.set(val / d, (cnt1.get(val / d) || 0) + 1)
      }
    }
  }
  let count = 0
  for (const x of nums2) {
    count += cnt1.get(x) || 0
  }
  return count
}
