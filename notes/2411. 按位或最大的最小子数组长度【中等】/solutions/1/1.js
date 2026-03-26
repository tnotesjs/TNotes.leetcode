/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const n = nums.length
  const ans = new Array(n)
  const lastBit = new Array(30).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    for (let b = 0; b < 30; b++) {
      if (nums[i] & (1 << b)) lastBit[b] = i
    }
    let farthest = i
    for (let b = 0; b < 30; b++) {
      farthest = Math.max(farthest, lastBit[b])
    }
    ans[i] = farthest - i + 1
  }
  return ans
}
