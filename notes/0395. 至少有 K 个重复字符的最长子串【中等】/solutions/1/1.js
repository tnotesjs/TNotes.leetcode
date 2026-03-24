/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0
  const count = new Map()
  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1)
  for (const [ch, freq] of count) {
    if (freq < k) {
      return Math.max(...s.split(ch).map((sub) => longestSubstring(sub, k)))
    }
  }
  return s.length
}
