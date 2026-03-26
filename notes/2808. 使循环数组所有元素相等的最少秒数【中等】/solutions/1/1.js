/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  const n = nums.length
  const pos = new Map()
  for (let i = 0; i < n; i++) {
    if (!pos.has(nums[i])) pos.set(nums[i], [])
    pos.get(nums[i]).push(i)
  }
  let ans = n
  for (const [, indices] of pos) {
    let maxGap = indices[0] + n - indices[indices.length - 1]
    for (let i = 1; i < indices.length; i++) {
      maxGap = Math.max(maxGap, indices[i] - indices[i - 1])
    }
    ans = Math.min(ans, Math.floor(maxGap / 2))
  }
  return ans
}
