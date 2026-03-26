/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function (nums, k) {
  const n = nums.length
  const dec = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) dec[i] = dec[i - 1] + 1
  }
  const inc = new Array(n).fill(1)
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] <= nums[i + 1]) inc[i] = inc[i + 1] + 1
  }
  const result = []
  for (let i = k; i < n - k; i++) {
    if (dec[i - 1] >= k && inc[i + 1] >= k) result.push(i)
  }
  return result
}
