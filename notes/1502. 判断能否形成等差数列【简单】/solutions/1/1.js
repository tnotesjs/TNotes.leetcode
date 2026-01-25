/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  // 排序
  arr.sort((a, b) => a - b)

  // 取公差
  const diff = arr[1] - arr[0]

  // 验公差
  for (let i = 2; i < arr.length; i += 1) {
    if (arr[i] - arr[i - 1] !== diff) return false
  }

  return true
}
