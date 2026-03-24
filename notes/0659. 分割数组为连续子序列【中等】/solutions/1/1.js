/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const freq = new Map()
  const tail = new Map()
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1)
  for (const n of nums) {
    if (freq.get(n) === 0) continue
    if ((tail.get(n) || 0) > 0) {
      freq.set(n, freq.get(n) - 1)
      tail.set(n, tail.get(n) - 1)
      tail.set(n + 1, (tail.get(n + 1) || 0) + 1)
    } else if ((freq.get(n + 1) || 0) > 0 && (freq.get(n + 2) || 0) > 0) {
      freq.set(n, freq.get(n) - 1)
      freq.set(n + 1, freq.get(n + 1) - 1)
      freq.set(n + 2, freq.get(n + 2) - 1)
      tail.set(n + 3, (tail.get(n + 3) || 0) + 1)
    } else {
      return false
    }
  }
  return true
}
