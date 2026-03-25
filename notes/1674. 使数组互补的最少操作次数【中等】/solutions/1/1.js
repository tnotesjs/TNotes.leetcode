/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const n = nums.length
  // 差分数组：对于每对 (a, b)，目标和 T
  // T ∈ [2, 2*limit]: 0 次修改: T == a+b
  // 1 次修改: T ∈ [min(a,b)+1, max(a,b)+limit]
  // 2 次修改: 其余
  const diff = new Array(2 * limit + 2).fill(0)
  for (let i = 0; i < n / 2; i++) {
    const a = nums[i],
      b = nums[n - 1 - i]
    const lo = Math.min(a, b) + 1
    const hi = Math.max(a, b) + limit
    diff[2] += 2 // 所有 T 默认 2 次
    diff[lo] -= 1 // [lo, hi] 区间减 1
    diff[a + b] -= 1 // a+b 再减 1
    diff[a + b + 1] += 1
    diff[hi + 1] += 1
  }
  let res = n,
    cur = 0
  for (let t = 2; t <= 2 * limit; t++) {
    cur += diff[t]
    res = Math.min(res, cur)
  }
  return res
}
