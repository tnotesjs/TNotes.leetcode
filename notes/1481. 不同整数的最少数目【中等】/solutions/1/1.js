/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const freq = new Map()
  for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1)
  const counts = [...freq.values()].sort((a, b) => a - b)
  let removed = 0
  for (let i = 0; i < counts.length; i++) {
    if (k >= counts[i]) {
      k -= counts[i]
      removed++
    } else break
  }
  return counts.length - removed
}
