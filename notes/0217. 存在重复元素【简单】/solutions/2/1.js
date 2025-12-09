/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // 如果已存在该元素，说明有重复
    if (map.has(nums[i])) {
      return true
    }
    // 记录当前元素
    map.set(nums[i], true)
  }

  return false
}
