/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function (word, k) {
  const n = word.length
  let total = 0,
    start = 0
  for (let end = 0; end <= n; end++) {
    if (
      end === n ||
      (end > start &&
        Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2)
    ) {
      total += countSegment(word, start, end, k)
      start = end
    }
  }
  return total
}

function countSegment(word, lo, hi, k) {
  let count = 0
  const len = hi - lo
  for (let c = 1; c <= 26; c++) {
    const win = c * k
    if (win > len) break
    const freq = new Array(26).fill(0)
    let valid = 0
    for (let i = lo; i < lo + win; i++) {
      const ch = word.charCodeAt(i) - 97
      if (freq[ch] === k) valid--
      freq[ch]++
      if (freq[ch] === k) valid++
    }
    if (valid === c) count++
    for (let i = lo + win; i < hi; i++) {
      const add = word.charCodeAt(i) - 97
      if (freq[add] === k) valid--
      freq[add]++
      if (freq[add] === k) valid++
      const rem = word.charCodeAt(i - win) - 97
      if (freq[rem] === k) valid--
      freq[rem]--
      if (freq[rem] === k) valid++
      if (valid === c) count++
    }
  }
  return count
}
