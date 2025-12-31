/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1

  const nums = new Array(n + 1).fill(0)
  nums[1] = 1
  let ans = 1

  for (let i = 1; 2 * i <= n; i++) {
    const even = 2 * i
    const odd = 2 * i + 1
    nums[even] = nums[i]
    ans = Math.max(ans, nums[even])
    if (odd <= n) {
      nums[odd] = nums[i] + nums[i + 1]
      ans = Math.max(ans, nums[odd])
    }
  }

  return ans
}
