/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
  const n = nums.length
  const diff = new Array(n + 1).fill(0) // 差分数组
  let cur = 0
  for (let i = 0; i < n; i++) {
    cur += diff[i]
    const val = nums[i] + cur
    if (val < 0) return false
    if (val === 0) continue
    if (i + k > n) return false
    cur -= val
    diff[i + k] += val
  }
  return true
}
