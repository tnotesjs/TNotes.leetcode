/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const n = nums.length
  const backtrack = (start) => {
    if (start === n - 1) {
      res.push(nums.slice())
      return
    }
    for (let i = start; i < n; i++) {
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
      backtrack(start + 1)
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
    }
  }
  backtrack(0)
  return res
}
