/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const map = new Map()

  // 统计偶数元素的出现次数
  for (const num of nums) {
    if (num % 2 === 0) {
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  // 如果没有偶数元素
  if (map.size === 0) {
    return -1
  }

  // 找出现次数最多且值最小的偶数
  let result = -1
  let maxCount = 0

  for (const [num, count] of map) {
    if (count > maxCount || (count === maxCount && num < result)) {
      result = num
      maxCount = count
    }
  }

  return result
}
