/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length
  let ans = 0
  const freq = new Map()

  for (let c = n - 2; c >= 2; c -= 1) {
    const dVal = nums[c + 1]
    freq.set(dVal, (freq.get(dVal) || 0) + 1)

    for (let a = 0; a < c; a += 1) {
      for (let b = a + 1; b < c; b += 1) {
        const sum = nums[a] + nums[b] + nums[c]
        ans += freq.get(sum) || 0
      }
    }
  }

  return ans
}
