/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const n = nums.length
  const ids = Array.from({ length: n }, (_, i) => i)
  ids.sort((a, b) => nums[a] - nums[b] || a - b)
  const marked = new Uint8Array(n)
  let score = 0
  for (const i of ids) {
    if (marked[i]) continue
    score += nums[i]
    marked[i] = 1
    if (i > 0) marked[i - 1] = 1
    if (i < n - 1) marked[i + 1] = 1
  }
  return score
}
