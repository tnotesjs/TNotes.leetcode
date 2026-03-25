/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const getFreq = (word) => {
    const freq = new Array(26).fill(0)
    for (const ch of word) freq[ch.charCodeAt(0) - 97]++
    return freq
  }

  // 合并 words2 的最大频次需求
  const maxFreq = new Array(26).fill(0)
  for (const word of words2) {
    const freq = getFreq(word)
    for (let i = 0; i < 26; i++) {
      maxFreq[i] = Math.max(maxFreq[i], freq[i])
    }
  }

  return words1.filter((word) => {
    const freq = getFreq(word)
    return maxFreq.every((cnt, i) => freq[i] >= cnt)
  })
}
