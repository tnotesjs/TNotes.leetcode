/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  let count = 1,
    cur = 0
  for (const c of s) {
    const d = Number(c)
    if (d > k) return -1
    cur = cur * 10 + d
    if (cur > k) {
      count++
      cur = d
    }
  }
  return count
}
