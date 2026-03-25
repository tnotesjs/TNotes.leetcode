/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => a - b)
  const n = arr.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + arr[i]
  let ans = 0
  let minDiff = target // value=0 时 sum=0
  for (let value = 0; value <= arr[n - 1]; value++) {
    // 二分找第一个 >= value 的位置
    let lo = 0,
      hi = n
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (arr[mid] < value) lo = mid + 1
      else hi = mid
    }
    const sum = prefix[lo] + (n - lo) * value
    const diff = Math.abs(sum - target)
    if (diff < minDiff) {
      minDiff = diff
      ans = value
    }
  }
  return ans
}
