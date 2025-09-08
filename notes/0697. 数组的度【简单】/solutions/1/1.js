/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // 使用 Map 记录每个元素的出现次数、首次出现位置和最后出现位置
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const item = map.get(nums[i])
      item.count++
      item.end = i
    } else {
      map.set(nums[i], {
        count: 1,
        start: i,
        end: i,
      })
    }
  }

  // 找到数组的度（最大出现次数）
  let maxCount = 0
  for (const item of map.values()) {
    maxCount = Math.max(maxCount, item.count)
  }

  // 找到具有最大出现次数的元素中最短的子数组长度
  let minLength = nums.length
  for (const item of map.values()) {
    if (item.count === maxCount) {
      minLength = Math.min(minLength, item.end - item.start + 1)
    }
  }

  return minLength
}
