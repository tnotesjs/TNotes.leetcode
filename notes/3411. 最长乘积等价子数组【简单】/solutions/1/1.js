/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  const n = nums.length

  // 求最大公约数
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  // 求最小公倍数
  const lcm = (a, b) => (a / gcd(a, b)) * b

  let maxLen = 0

  // 枚举所有子数组
  for (let i = 0; i < n; i++) {
    let prod = 1
    let g = 0
    let l = 1

    for (let j = i; j < n; j++) {
      prod *= nums[j]
      g = gcd(g, nums[j])
      l = lcm(l, nums[j])

      // 检查是否满足乘积等价条件
      if (prod === l * g) {
        maxLen = Math.max(maxLen, j - i + 1)
      }
    }
  }

  return maxLen
}
