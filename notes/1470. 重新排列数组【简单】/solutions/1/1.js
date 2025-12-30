/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const res = new Array(nums.length)
  let idx = 0
  for (let i = 0; i < n; i++) {
    res[idx++] = nums[i]
    res[idx++] = nums[i + n]
  }
  return res
}
