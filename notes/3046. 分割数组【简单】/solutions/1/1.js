/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  // 统计每个元素的出现次数
  const count = new Map()
  for (const num of nums) {
    const cnt = (count.get(num) || 0) + 1
    // 如果某个元素出现超过 2 次，无法分割
    if (cnt > 2) {
      return false
    }
    count.set(num, cnt)
  }
  return true
}
