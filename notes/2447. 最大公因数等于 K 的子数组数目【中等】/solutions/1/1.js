/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function (nums, k) {
  let count = 0
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  for (let i = 0; i < nums.length; i++) {
    let g = 0
    for (let j = i; j < nums.length; j++) {
      g = gcd(g, nums[j])
      if (g === k) count++
      if (g < k) break
    }
  }
  return count
}
