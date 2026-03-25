/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const freq = new Map()
  for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1)
  const counts = [...freq.values()].sort((a, b) => b - a)
  let removed = 0,
    ans = 0
  const half = arr.length / 2
  for (const c of counts) {
    removed += c
    ans++
    if (removed >= half) return ans
  }
  return ans
}
