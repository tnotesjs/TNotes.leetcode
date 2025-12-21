/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  // 第一个子数组的代价固定为 nums[0]
  // 需要在 nums[1:] 中找两个最小的元素作为第二和第三个子数组的起始元素
  const n = nums.length
  let min1 = Infinity // 最小值
  let min2 = Infinity // 次小值
  for (let i = 1; i < n; i++) {
    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
  }
  return nums[0] + min1 + min2
}
