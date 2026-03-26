/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  const n = nums.length
  const prefixMax = new Array(n)
  const suffixMin = new Array(n)
  prefixMax[0] = nums[0]
  for (let i = 1; i < n; i++) prefixMax[i] = Math.max(prefixMax[i - 1], nums[i])
  suffixMin[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--)
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i])
  let sum = 0
  for (let i = 1; i < n - 1; i++) {
    if (prefixMax[i - 1] < nums[i] && nums[i] < suffixMin[i + 1]) sum += 2
    else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) sum += 1
  }
  return sum
}
