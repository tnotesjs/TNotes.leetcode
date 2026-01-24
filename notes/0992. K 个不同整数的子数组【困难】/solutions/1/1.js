/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  // 恰好 k 个 = 最多 k 个 - 最多 k-1 个
  return atMostK(nums, k) - atMostK(nums, k - 1)
}

// 计算最多包含 k 个不同整数的子数组数量
function atMostK(nums, k) {
  const n = nums.length
  const map = new Map() // 记录窗口内每个数字的出现次数
  let left = 0
  let count = 0

  for (let right = 0; right < n; right++) {
    // 扩展右边界
    map.set(nums[right], (map.get(nums[right]) || 0) + 1)

    // 收缩左边界，保证窗口内不同数字不超过 k 个
    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1)
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left])
      }
      left++
    }

    // 以 right 为右端点，有 right - left + 1 个子数组
    count += right - left + 1
  }

  return count
}
