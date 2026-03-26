/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(n, words, groups) {
  const dp = new Array(n).fill(1)
  const prev = new Array(n).fill(-1)

  const hamming = (a, b) => {
    if (a.length !== b.length) return -1
    let d = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) d++
      if (d > 1) return d
    }
    return d
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && hamming(words[i], words[j]) === 1) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          prev[i] = j
        }
      }
    }
  }

  let maxIdx = 0
  for (let i = 1; i < n; i++) {
    if (dp[i] > dp[maxIdx]) maxIdx = i
  }

  const res = []
  for (let i = maxIdx; i !== -1; i = prev[i]) {
    res.push(words[i])
  }
  return res.reverse()
}
