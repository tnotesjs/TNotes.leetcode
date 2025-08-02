/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 使用 Map 统计每个数字出现的次数
  const map = new Map()

  // 遍历数组，统计每个数字出现的次数
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // 找到出现次数为 1 的数字
  for (const [num, count] of map) {
    if (count === 1) {
      return num
    }
  }
}
