/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  const m = nums.length,
    n = nums[0].length
  for (let i = 0; i < m; i++) nums[i].sort((a, b) => b - a)
  let ans = 0
  for (let j = 0; j < n; j++) {
    let mx = 0
    for (let i = 0; i < m; i++) mx = Math.max(mx, nums[i][j])
    ans += mx
  }
  return ans
}
