/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  const n = arr.length
  let noDelete = arr[0],
    withDelete = -Infinity
  let ans = arr[0]
  for (let i = 1; i < n; i++) {
    withDelete = Math.max(noDelete, withDelete + arr[i])
    noDelete = Math.max(arr[i], noDelete + arr[i])
    ans = Math.max(ans, noDelete, withDelete)
  }
  return ans
}
