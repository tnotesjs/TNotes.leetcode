/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length
  const ans = new Array(n).fill(0)
  const groups = new Map()
  for (let i = 0; i < n; i++) {
    if (!groups.has(nums[i])) groups.set(nums[i], [])
    groups.get(nums[i]).push(i)
  }
  for (const indices of groups.values()) {
    const m = indices.length
    const pre = new Array(m + 1).fill(0)
    for (let i = 0; i < m; i++) pre[i + 1] = pre[i] + indices[i]
    for (let i = 0; i < m; i++) {
      const idx = indices[i]
      const left = BigInt(idx) * BigInt(i) - BigInt(pre[i])
      const right =
        BigInt(pre[m]) - BigInt(pre[i + 1]) - BigInt(idx) * BigInt(m - i - 1)
      ans[idx] = Number(left + right)
    }
  }
  return ans
}
