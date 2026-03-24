/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length
  let lo = 0,
    hi = n - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (citations[mid] >= n - mid) hi = mid - 1
    else lo = mid + 1
  }
  return n - lo
}
