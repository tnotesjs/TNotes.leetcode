/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length,
    map = new Map(),
    majorityCount = Math.floor(nums.length / 2)
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    map.set(item, (map.get(item) || 0) + 1)
    if (map.get(item) > majorityCount) return item
  }
}
