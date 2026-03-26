/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
  const n = s.length
  let ones = 0
  let res = ''
  for (let l = 0, r = 0; r < n; r++) {
    ones += s[r] === '1' ? 1 : 0
    while (ones > k || (ones === k && s[l] === '0')) {
      ones -= s[l] === '1' ? 1 : 0
      l++
    }
    if (ones === k) {
      const sub = s.substring(l, r + 1)
      if (res === '' || sub.length < res.length || (sub.length === res.length && sub < res)) {
        res = sub
      }
    }
  }
  return res
}
