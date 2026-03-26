/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfPower = function (nums) {
  const MOD = 1000000007n
  nums.sort((a, b) => a - b)
  let ans = 0n,
    prefix = 0n
  for (let j = 0; j < nums.length; j++) {
    const v = BigInt(nums[j])
    const coeff = (prefix + v) % MOD
    ans = (ans + ((v * v) % MOD) * coeff) % MOD
    prefix = (2n * prefix + v) % MOD
  }
  return Number(ans)
}
