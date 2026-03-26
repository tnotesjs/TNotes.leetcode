/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let ans = (nums[0] > 0 ? 1 : 0) + 1 // s=0（检查） + s=n（一定满足）
  for (let s = 1; s < n; s++) {
    if (nums[s - 1] < s && nums[s] > s) ans++
  }
  return ans
}
