/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const freq = new Map()

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  const seen = new Set()

  for (const count of freq.values()) {
    if (seen.has(count)) return false
    seen.add(count)
  }

  return true
}
