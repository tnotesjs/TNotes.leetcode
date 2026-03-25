/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const n = arr.length
  let res = 0,
    i = 1
  while (i < n) {
    while (i < n && arr[i] <= arr[i - 1]) i++
    let up = 0
    while (i < n && arr[i] > arr[i - 1]) {
      up++
      i++
    }
    let down = 0
    while (i < n && arr[i] < arr[i - 1]) {
      down++
      i++
    }
    if (up > 0 && down > 0) res = Math.max(res, up + down + 1)
  }
  return res
}
