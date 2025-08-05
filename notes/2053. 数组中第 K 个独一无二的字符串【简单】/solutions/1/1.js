/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  // 统计每个字符串的出现次数
  const countMap = new Map()
  for (let str of arr) {
    countMap.set(str, (countMap.get(str) || 0) + 1)
  }

  // 按照原数组顺序查找第 k 个独一无二的字符串
  let distinctCount = 0
  for (let str of arr) {
    // 如果字符串只出现一次，则为独一无二的字符串
    if (countMap.get(str) === 1) {
      distinctCount++
      // 如果找到第 k 个，直接返回
      if (distinctCount === k) {
        return str
      }
    }
  }

  // 如果找不到第 k 个独一无二的字符串，返回空字符串
  return ''
}
