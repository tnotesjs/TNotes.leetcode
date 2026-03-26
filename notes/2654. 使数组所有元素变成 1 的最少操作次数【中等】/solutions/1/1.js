/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length
  let ones = 0
  for (const v of nums) if (v === 1) ones++
  if (ones > 0) return n - ones

  let minLen = Infinity
  for (let i = 0; i < n; i++) {
    let g = 0
    for (let j = i; j < n; j++) {
      g = gcd(g, nums[j])
      if (g === 1) {
        minLen = Math.min(minLen, j - i + 1)
        break
      }
    }
  }
  return minLen === Infinity ? -1 : minLen - 1 + (n - 1)
}

function gcd(a, b) {
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}
