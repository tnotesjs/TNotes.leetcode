/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const freq = new Map()

  // 统计每个字符的频率
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1)
  }

  let maxVowel = 0
  let maxConsonant = 0

  // 分别找出元音和辅音的最高频率
  for (const [c, count] of freq) {
    if (vowels.has(c)) {
      maxVowel = Math.max(maxVowel, count)
    } else {
      maxConsonant = Math.max(maxConsonant, count)
    }
  }

  return maxVowel + maxConsonant
}
