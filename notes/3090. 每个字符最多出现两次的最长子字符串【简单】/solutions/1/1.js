/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  const count = new Map()
  let maxLen = 0
  let left = 0
  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    count.set(c, (count.get(c) || 0) + 1)
    // 当某个字符出现超过 2 次时，收缩左边界
    while (count.get(c) > 2) {
      const leftChar = s[left]
      count.set(leftChar, count.get(leftChar) - 1)
      left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}
