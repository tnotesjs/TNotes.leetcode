/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  if (nums.length === 1) return 0

  let ops = 0 // 记录操作次数
  let prev = nums[0] // 记录前一个元素的值

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] <= prev) {
      // 下坡 - 提升下坡点到 prev + 1 位置，保证严格递增
      const target = prev + 1
      ops += target - nums[i]
      prev = target
    } else {
      // 上坡 - 继续前进
      prev = nums[i]
    }
  }

  return ops
}
