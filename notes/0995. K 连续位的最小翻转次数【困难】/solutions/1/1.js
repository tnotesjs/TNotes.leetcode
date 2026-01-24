/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  const n = nums.length
  let count = 0 // 翻转次数
  let flipped = 0 // 当前位置被翻转的次数(奇偶性)
  const diff = new Array(n + 1).fill(0) // 差分数组

  for (let i = 0; i < n; i++) {
    // 更新当前位置的翻转状态
    flipped += diff[i]

    // 计算当前位置的实际值(原值 XOR 翻转次数的奇偶性)
    const current = (nums[i] + flipped) % 2

    // 如果当前位置是 0,需要翻转
    if (current === 0) {
      // 检查是否有足够的空间进行翻转
      if (i + k > n) return -1

      count++
      flipped ^= 1 // 当前位置翻转状态改变
      diff[i + k] -= 1 // k 位置后翻转状态恢复
    }
  }

  return count
}
