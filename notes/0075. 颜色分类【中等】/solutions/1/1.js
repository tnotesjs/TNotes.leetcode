/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0
  let p2 = nums.length - 1
  let i = 0

  while (i <= p2) {
    if (nums[i] === 0) {
      // 将0交换到前面
      ;[nums[i], nums[p0]] = [nums[p0], nums[i]]
      p0++
      i++
    } else if (nums[i] === 2) {
      // 将2交换到后面，i不动
      ;[nums[i], nums[p2]] = [nums[p2], nums[i]]
      p2--
    } else {
      // nums[i] === 1，位置正确，继续前进
      i++
    }
  }
}
