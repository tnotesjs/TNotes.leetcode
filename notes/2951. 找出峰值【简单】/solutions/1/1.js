/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const result = []
  // 遍历中间元素（排除第一个和最后一个）
  for (let i = 1; i < mountain.length - 1; i++) {
    // 检查是否严格大于相邻元素
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      result.push(i)
    }
  }
  return result
}
