/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]
  const res = new Array(n)
  for (let i = 0; i < n; i++) {
    const leftSum = prefix[i]
    const rightSum = prefix[n] - prefix[i + 1]
    res[i] = nums[i] * i - leftSum + rightSum - nums[i] * (n - i - 1)
  }
  return res
}
