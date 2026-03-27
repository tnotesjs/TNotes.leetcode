/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const freq = new Array(26).fill(0)
  for (const c of word) freq[c.charCodeAt(0) - 97]++
  const counts = freq.filter(f => f > 0).sort((a, b) => a - b)
  let minDel = Infinity
  for (const base of counts) {
    let del = 0
    for (const f of counts) {
      if (f < base) del += f
      else if (f > base + k) del += f - (base + k)
    }
    minDel = Math.min(minDel, del)
  }
  return minDel
}
