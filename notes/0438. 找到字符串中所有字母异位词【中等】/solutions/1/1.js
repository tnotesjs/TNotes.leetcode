/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = []
  if (s.length < p.length) return res
  const count = new Array(26).fill(0)
  for (const ch of p) count[ch.charCodeAt(0) - 97]++
  const window = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    window[s.charCodeAt(i) - 97]++
    if (i >= p.length) window[s.charCodeAt(i - p.length) - 97]--
    if (i >= p.length - 1) {
      let match = true
      for (let j = 0; j < 26; j++)
        if (count[j] !== window[j]) {
          match = false
          break
        }
      if (match) res.push(i - p.length + 1)
    }
  }
  return res
}
