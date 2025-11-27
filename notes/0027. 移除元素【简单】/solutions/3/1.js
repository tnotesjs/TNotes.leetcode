/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = -1,
    fast = 0,
    len = nums.length
  while (fast <= len - 1) {
    if (nums[fast] === val) fast++
    else nums[++slow] = nums[fast++]
  }
  return slow + 1
}
