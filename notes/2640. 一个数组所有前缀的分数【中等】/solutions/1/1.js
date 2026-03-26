/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
  const n = nums.length
  const ans = new Array(n)
  let maxVal = 0,
    score = 0
  for (let i = 0; i < n; i++) {
    maxVal = Math.max(maxVal, nums[i])
    score += nums[i] + maxVal
    ans[i] = score
  }
  return ans
}
