/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const n = nums.length
  let pos1 = 0,
    posN = 0

  // 找到 1 和 n 的位置
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) pos1 = i
    if (nums[i] === n) posN = i
  }

  // 将 1 移到最前面需要 pos1 次交换
  // 将 n 移到最后面需要 (n - 1 - posN) 次交换
  // 如果 pos1 > posN，两者会相遇，减少 1 次交换
  return pos1 + (n - 1 - posN) - (pos1 > posN ? 1 : 0)
}
