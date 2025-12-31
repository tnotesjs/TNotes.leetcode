/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const n = arr.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    const left = i + 1
    const right = n - i
    const total = left * right
    const oddCount = Math.floor((total + 1) / 2)
    ans += arr[i] * oddCount
  }

  return ans
}
