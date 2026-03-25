/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length
  let right = n - 1
  while (right > 0 && arr[right - 1] <= arr[right]) right--
  if (right === 0) return 0 // 已经有序
  let res = right // 删除 [0, right-1]
  for (let left = 0; left < n; left++) {
    if (left > 0 && arr[left] < arr[left - 1]) break
    while (right < n && arr[right] < arr[left]) right++
    res = Math.min(res, right - left - 1)
  }
  return res
}
