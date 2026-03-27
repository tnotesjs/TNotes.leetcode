/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
  const n = nums.length
  const res = []
  const inc = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1] + 1) inc[i] = inc[i - 1] + 1
  }
  for (let i = k - 1; i < n; i++) {
    res.push(inc[i] >= k ? nums[i] : -1)
  }
  return res
}
