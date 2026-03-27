/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  const n = s.length
  const posA = []
  for (let i = 0; i <= n - a.length; i++) {
    if (s.substring(i, i + a.length) === a) posA.push(i)
  }
  const posB = []
  for (let i = 0; i <= n - b.length; i++) {
    if (s.substring(i, i + b.length) === b) posB.push(i)
  }
  const res = []
  for (const i of posA) {
    // 二分查找第一个 >= i - k 的 posB
    let lo = 0,
      hi = posB.length - 1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (posB[mid] < i - k) lo = mid + 1
      else hi = mid - 1
    }
    if (lo < posB.length && posB[lo] <= i + k) {
      res.push(i)
    }
  }
  return res
}
