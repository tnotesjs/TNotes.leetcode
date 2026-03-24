/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  const n = s.length
  let maxFreq = 0,
    maxChar = 0
  for (let i = 0; i < 26; i++) {
    if (freq[i] > maxFreq) {
      maxFreq = freq[i]
      maxChar = i
    }
  }
  if (maxFreq > Math.floor((n + 1) / 2)) return ''
  const res = new Array(n)
  let idx = 0
  // 先填偶数位
  while (freq[maxChar] > 0) {
    res[idx] = String.fromCharCode(maxChar + 97)
    freq[maxChar]--
    idx += 2
  }
  for (let i = 0; i < 26; i++) {
    while (freq[i] > 0) {
      if (idx >= n) idx = 1
      res[idx] = String.fromCharCode(i + 97)
      freq[i]--
      idx += 2
    }
  }
  return res.join('')
}
