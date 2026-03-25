/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let current = arr[0],
    wins = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > current) {
      current = arr[i]
      wins = 1
    } else {
      wins++
    }
    if (wins === k) return current
  }
  return current // 遍历结束时 current 已是最大值
}
