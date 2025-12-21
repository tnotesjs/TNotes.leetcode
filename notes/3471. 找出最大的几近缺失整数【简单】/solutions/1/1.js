/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  const n = nums.length
  const count = new Map()

  // 统计每个元素出现在多少个大小为 k 的子数组中
  // 位置 i 的元素出现在的子数组个数 = min(i, n-k) - max(0, i-k+1) + 1
  for (let i = 0; i < n; i++) {
    const left = Math.max(0, i - k + 1)
    const right = Math.min(i, n - k)
    const subarrays = right - left + 1
    count.set(nums[i], (count.get(nums[i]) || 0) + subarrays)
  }

  // 找出恰好出现在 1 个子数组中的最大整数
  let result = -1
  for (const [num, cnt] of count) {
    if (cnt === 1) {
      result = Math.max(result, num)
    }
  }

  return result
}
