/**
 * 已排序数组中，判断 target 是否出现次数 > n/2
 * 二分找左端点 L，检查 nums[L + floor(n/2)] 是否仍为 target
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  const n = nums.length
  // lower_bound 找到第一个 >= target 的位置
  let l = 0,
    r = n
  while (l < r) {
    const m = (l + r) >> 1
    if (nums[m] < target) l = m + 1
    else r = m
  }
  const L = l
  if (L === n || nums[L] !== target) return false
  const idx = L + (n >> 1) // L + floor(n/2)
  return idx < n && nums[idx] === target
}
