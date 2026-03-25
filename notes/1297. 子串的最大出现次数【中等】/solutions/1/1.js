/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  // 只需考虑 minSize 长度的子串，因为更长的子串出现次数不会更多
  const cnt = new Map()
  let ans = 0
  for (let i = 0; i <= s.length - minSize; i++) {
    const sub = s.substring(i, i + minSize)
    const unique = new Set(sub).size
    if (unique <= maxLetters) {
      const c = (cnt.get(sub) || 0) + 1
      cnt.set(sub, c)
      ans = Math.max(ans, c)
    }
  }
  return ans
}
