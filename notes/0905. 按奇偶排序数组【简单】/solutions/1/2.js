/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // 确保 left 指向奇数
    while (left < right && nums[left] % 2 === 0) left++
    // 确保 right 指向偶数
    while (left < right && nums[right] % 2 === 1) right--

    // 如果指针仍然有效，交换奇偶数
    if (left < right) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return nums
}
