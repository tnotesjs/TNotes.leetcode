/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const n = nums.length
  const ans = new Array(n)

  for (let i = 0; i < n; i += 1) {
    ans[i] = nums[nums[i]]
  }

  return ans
}
