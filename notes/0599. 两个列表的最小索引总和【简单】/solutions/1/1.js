/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // 创建哈希表存储 list1 中字符串及其索引
  const map = new Map()
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }

  let minSum = Infinity
  const result = []

  // 遍历 list2 查找共同字符串
  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      const i = map.get(list2[j])
      const sum = i + j

      if (sum < minSum) {
        // 找到更小索引和，更新结果数组
        minSum = sum
        result.length = 0 // 清空原数组
        result.push(list2[j])
      } else if (sum === minSum) {
        // 索引和相等，添加到结果数组
        result.push(list2[j])
      }
    }
  }

  return result
}
