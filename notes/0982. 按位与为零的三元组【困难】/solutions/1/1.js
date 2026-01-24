/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  const n = nums.length
  const map = new Map() // 记录所有两两按位与的结果及其出现次数

  // 预处理：计算所有 nums[i] & nums[j] 的结果
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const and = nums[i] & nums[j]
      map.set(and, (map.get(and) || 0) + 1)
    }
  }

  let count = 0
  // 遍历所有两两按位与的结果和第三个元素
  for (const [and, freq] of map) {
    for (let k = 0; k < n; k++) {
      // 如果三者按位与为 0，累加计数
      if ((and & nums[k]) === 0) {
        count += freq
      }
    }
  }

  return count
}
