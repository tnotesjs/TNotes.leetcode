/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  const n = nums.length
  const suffix = new Array(n + 1).fill(0n)
  for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] | BigInt(nums[i])
  let ans = 0n,
    prefix = 0n
  const shift = BigInt(k)
  for (let i = 0; i < n; i++) {
    const val = prefix | (BigInt(nums[i]) << shift) | suffix[i + 1]
    if (val > ans) ans = val
    prefix |= BigInt(nums[i])
  }
  return Number(ans)
}
