/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // 排序数组
  arr.sort((a, b) => a - b)

  // 首次扫描：找到最小绝对差
  let minDiff = Infinity
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1])
  }

  // 再次扫描：收集所有具有最小绝对差的数对
  const result = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) {
      result.push([arr[i - 1], arr[i]])
    }
  }

  return result
}
