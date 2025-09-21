/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // 使用Set存储宝石类型，提高查找效率
  const jewelSet = new Set(jewels)
  let count = 0

  // 遍历石头字符串，统计宝石数量
  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++
    }
  }

  return count
}
