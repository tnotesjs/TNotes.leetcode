/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // 如果左边是偶数，左指针右移
    if (nums[left] % 2 === 0) {
      left++
    }
    // 如果右边是奇数，右指针左移
    else if (nums[right] % 2 === 1) {
      right--
    }
    // 左边是奇数，右边是偶数，交换两者
    else {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return nums
}
