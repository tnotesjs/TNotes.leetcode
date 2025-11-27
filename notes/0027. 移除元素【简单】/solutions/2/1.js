/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    while (nums[l] !== val && l < r) {
      l++
    }
    while (nums[r] === val && l < r) {
      r--
    }
    let temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
  }
  return nums[l] === val ? l : l + 1
}
