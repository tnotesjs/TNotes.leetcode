/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let prev = 0

  for (const num of arr) {
    const missing = num - prev - 1
    if (missing >= k) return prev + k
    k -= missing
    prev = num
  }

  return arr[arr.length - 1] + k
}
