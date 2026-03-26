/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  const cnt1 = new Array(26).fill(0)
  const cnt2 = new Array(26).fill(0)
  for (const c of word1) cnt1[c.charCodeAt(0) - 97]++
  for (const c of word2) cnt2[c.charCodeAt(0) - 97]++

  for (let i = 0; i < 26; i++) {
    if (cnt1[i] === 0) continue
    for (let j = 0; j < 26; j++) {
      if (cnt2[j] === 0) continue
      cnt1[i]--
      cnt1[j]++
      cnt2[j]--
      cnt2[i]++
      let d1 = 0,
        d2 = 0
      for (let k = 0; k < 26; k++) {
        if (cnt1[k] > 0) d1++
        if (cnt2[k] > 0) d2++
      }
      if (d1 === d2) return true
      cnt1[i]++
      cnt1[j]--
      cnt2[j]++
      cnt2[i]--
    }
  }
  return false
}
