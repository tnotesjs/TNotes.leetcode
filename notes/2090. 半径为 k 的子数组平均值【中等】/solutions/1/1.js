/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  const n = nums.length
  const ans = new Array(n).fill(-1)
  if (2 * k + 1 > n) return ans
  let sum = 0
  for (let i = 0; i < 2 * k + 1; i++) sum += nums[i]
  ans[k] = Math.floor(sum / (2 * k + 1))
  for (let i = k + 1; i < n - k; i++) {
    sum += nums[i + k] - nums[i - k - 1]
    ans[i] = Math.floor(sum / (2 * k + 1))
  }
  return ans
}
