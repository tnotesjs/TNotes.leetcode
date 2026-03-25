/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  freq.sort((a, b) => b - a)
  let res = 0
  for (let i = 1; i < 26; i++) {
    if (freq[i] === 0) break
    if (freq[i] >= freq[i - 1]) {
      const target = Math.max(0, freq[i - 1] - 1)
      res += freq[i] - target
      freq[i] = target
    }
  }
  return res
}
