/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  if (nums1.length * 6 < nums2.length || nums2.length * 6 < nums1.length)
    return -1
  let sum1 = nums1.reduce((a, b) => a + b, 0)
  let sum2 = nums2.reduce((a, b) => a + b, 0)
  // 确保 sum1 <= sum2
  if (sum1 > sum2) {
    ;[nums1, nums2] = [nums2, nums1]
    ;[sum1, sum2] = [sum2, sum1]
  }
  let diff = sum2 - sum1
  // 统计每种贡献值的次数
  const cnt = new Array(6).fill(0)
  for (const x of nums1) cnt[6 - x]++ // 可以增加的最大值
  for (const x of nums2) cnt[x - 1]++ // 可以减少的最大值
  let ops = 0
  for (let i = 5; i >= 1 && diff > 0; i--) {
    const use = Math.min(cnt[i], Math.ceil(diff / i))
    ops += use
    diff -= use * i
  }
  return ops
}
