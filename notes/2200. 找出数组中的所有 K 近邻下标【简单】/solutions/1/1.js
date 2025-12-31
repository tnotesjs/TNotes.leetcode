/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const hit = []
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === key) hit.push(i)
  }

  const mark = Array(nums.length).fill(false)
  for (const idx of hit) {
    const l = Math.max(0, idx - k)
    const r = Math.min(nums.length - 1, idx + k)
    for (let i = l; i <= r; i += 1) {
      mark[i] = true
    }
  }

  const res = []
  for (let i = 0; i < mark.length; i += 1) {
    if (mark[i]) res.push(i)
  }
  return res
}
