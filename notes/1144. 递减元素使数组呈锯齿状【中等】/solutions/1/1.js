/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  const n = nums.length
  const res = [0, 0]
  for (let i = 0; i < n; i++) {
    const left = i > 0 ? nums[i - 1] : Infinity
    const right = i < n - 1 ? nums[i + 1] : Infinity
    const diff = nums[i] - Math.min(left, right) + 1
    if (diff > 0) res[i % 2] += diff
  }
  return Math.min(res[0], res[1])
}
