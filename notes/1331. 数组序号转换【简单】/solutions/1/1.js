/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // 去重排序
  const sorted = [...new Set(arr)].sort((a, b) => a - b)
  // 数值 -> 序号映射
  const rank = new Map()
  for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i + 1)

  // 最后再映射回原数组
  return arr.map((v) => rank.get(v))
}
