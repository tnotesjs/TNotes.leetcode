/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  // 排序后，每两个元素交换位置
  nums.sort((a, b) => a - b)
  const arr = []
  for (let i = 0; i < nums.length; i += 2) {
    // Bob 先添加（第二小的），Alice 后添加（最小的）
    arr.push(nums[i + 1], nums[i])
  }
  return arr
}
