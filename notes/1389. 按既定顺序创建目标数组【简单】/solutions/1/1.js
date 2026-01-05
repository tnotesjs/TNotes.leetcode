/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const target = []

  for (let i = 0; i < nums.length; i++) {
    // 在指定位置插入当前数字
    target.splice(index[i], 0, nums[i])
  }

  return target
}
