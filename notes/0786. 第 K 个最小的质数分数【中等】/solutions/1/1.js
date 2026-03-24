/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length
  let lo = 0,
    hi = 1
  while (lo < hi) {
    const mid = (lo + hi) / 2
    let cnt = 0,
      p = 0,
      q = 1
    let j = 1
    for (let i = 0; i < n; i++) {
      while (j < n && arr[i] > mid * arr[j]) j++
      cnt += n - j
      if (j < n && p * arr[j] < q * arr[i]) {
        p = arr[i]
        q = arr[j]
      }
    }
    if (cnt === k) return [p, q]
    if (cnt < k) lo = mid
    else hi = mid
  }
  return []
}
