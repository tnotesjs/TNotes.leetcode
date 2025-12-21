/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  // 统计每个元素的频率
  const freq = new Map()
  let maxFreq = 0
  for (const num of nums) {
    const count = (freq.get(num) || 0) + 1
    freq.set(num, count)
    maxFreq = Math.max(maxFreq, count)
  }
  // 统计所有最大频率元素的总频率
  let result = 0
  for (const count of freq.values()) {
    if (count === maxFreq) {
      result += count
    }
  }
  return result
}
