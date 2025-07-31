/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 将出现过的数字对应的索引位置的值变为负数
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  // 找出仍为正数的位置，这些位置对应的数字就是缺失的
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }

  return result
}
