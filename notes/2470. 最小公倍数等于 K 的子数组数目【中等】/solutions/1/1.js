/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  const lcm = (a, b) => a / gcd(a, b) * b
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let l = 1
    for (let j = i; j < nums.length; j++) {
      l = lcm(l, nums[j])
      if (l === k) count++
      if (l > k) break
    }
  }
  return count
}
