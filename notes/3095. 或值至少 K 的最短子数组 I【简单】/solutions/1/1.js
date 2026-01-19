/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  const n = nums.length
  let minLen = Infinity
  // 枚举所有子数组
  for (let i = 0; i < n; i++) {
    let orVal = 0
    for (let j = i; j < n; j++) {
      orVal |= nums[j]
      if (orVal >= k) {
        minLen = Math.min(minLen, j - i + 1)
        break // 找到以 i 开头的最短子数组，可以跳出
      }
    }
  }
  return minLen === Infinity ? -1 : minLen
}

// 2026.01.19 20:20
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 55.45MB 击败 100.00%
