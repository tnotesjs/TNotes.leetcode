/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (k > s.length) return false
  const cnt = new Array(26).fill(0)
  for (const ch of s) cnt[ch.charCodeAt(0) - 97]++
  let odd = 0
  for (const c of cnt) if (c % 2 === 1) odd++
  return odd <= k
}
