/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const map = new Map()
  let pairs = 0

  // 统计每个数字的出现次数
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // 计算数对数量和剩余数量
  let leftover = 0
  for (const count of map.values()) {
    pairs += Math.floor(count / 2)
    leftover += count % 2
  }

  return [pairs, leftover]
}
