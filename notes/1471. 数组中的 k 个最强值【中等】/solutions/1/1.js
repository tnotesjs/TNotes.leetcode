/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b)
  const m = arr[Math.floor((arr.length - 1) / 2)]
  let left = 0,
    right = arr.length - 1
  const res = []
  while (res.length < k) {
    if (Math.abs(arr[right] - m) >= Math.abs(arr[left] - m)) {
      res.push(arr[right--])
    } else {
      res.push(arr[left++])
    }
  }
  return res
}
