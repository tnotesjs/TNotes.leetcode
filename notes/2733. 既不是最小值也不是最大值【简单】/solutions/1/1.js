/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1

  nums.sort((a, b) => a - b)
  return nums[1] // 排序后第二个元素既不是最小值也不是最大值
}
