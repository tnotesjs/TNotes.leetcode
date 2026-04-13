/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 1
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast++]
    else fast++
  }
  return slow + 1
}
