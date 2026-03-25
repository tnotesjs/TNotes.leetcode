/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const MOD = 1e9 + 7
  nums.sort((a, b) => a - b)
  const n = nums.length
  // 预计算 2 的幂次
  const pow2 = [1]
  for (let i = 1; i < n; i++) pow2[i] = (pow2[i - 1] * 2) % MOD
  let res = 0,
    left = 0,
    right = n - 1
  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      res = (res + pow2[right - left]) % MOD
      left++
    } else right--
  }
  return res
}
