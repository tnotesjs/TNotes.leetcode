/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false // 当前位置不可达
    maxReach = Math.max(maxReach, i + nums[i])
    if (maxReach >= nums.length - 1) return true
  }
  return true
}
