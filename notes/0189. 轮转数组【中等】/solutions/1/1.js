/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const reverse = (left, right) => {
    while (left < right) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      right--
    }
  }
  const n = nums.length
  k %= n
  reverse(0, n - 1) // 整体反转
  reverse(0, k - 1) // 前 k 个再反转
  reverse(k, n - 1) // 后半再反转
}
