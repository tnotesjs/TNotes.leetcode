/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = new Map()

  // 合并 items1 的重量
  for (const [value, weight] of items1) {
    map.set(value, (map.get(value) || 0) + weight)
  }

  // 合并 items2 的重量
  for (const [value, weight] of items2) {
    map.set(value, (map.get(value) || 0) + weight)
  }

  // 转换为数组并按 value 升序排序
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
}
