/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const n = arr.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    // 包含 arr[i] 的子数组，有多少种可能的起始位置
    const left = i + 1

    // 包含 arr[i] 的子数组，有多少种可能的结束位置
    const right = n - i

    // 每种起始位置可以和任意一种结束位置组合
    const total = left * right

    const oddCount = Math.floor((total + 1) / 2)
    ans += arr[i] * oddCount
  }

  return ans
}
