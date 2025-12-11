/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    // 如果该数字已经出现过，检查索引距离
    if (map.has(num)) {
      const prevIndex = map.get(num)
      if (i - prevIndex <= k) {
        return true
      }
    }

    // 更新该数字的最新索引
    map.set(num, i)
  }

  return false
}
