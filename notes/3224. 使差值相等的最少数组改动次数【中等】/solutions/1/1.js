/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
  const n = nums.length
  const diff = new Array(k + 2).fill(0) // 差分数组
  for (let i = 0; i < n / 2; i++) {
    const a = nums[i], b = nums[n - 1 - i]
    const d = Math.abs(a - b)
    const maxD = Math.max(Math.max(a, b), k - Math.min(a, b))
    // 不改：d 处 cost=0，否则改一个：[0, maxD] 处 cost=1，否则改两个 cost=2
    // 差分：全局 +2
    diff[0] += 2
    // [0, maxD] 改一个，cost -= 1
    diff[0] -= 1
    diff[maxD + 1] += 1
    // d 处 cost -= 1（不改）
    diff[d] -= 1
    diff[d + 1] += 1
  }
  let res = Infinity, cur = 0
  for (let x = 0; x <= k; x++) {
    cur += diff[x]
    res = Math.min(res, cur)
  }
  return res
}
