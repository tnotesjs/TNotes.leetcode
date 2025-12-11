/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0 // 指向下一个非零元素应该放置的位置

  // 将所有非零元素移到数组前面
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  // 将剩余位置填充0
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
}
