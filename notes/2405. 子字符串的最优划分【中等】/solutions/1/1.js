/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let count = 1
  const seen = new Set()
  for (const c of s) {
    if (seen.has(c)) {
      count++
      seen.clear()
    }
    seen.add(c)
  }
  return count
}
