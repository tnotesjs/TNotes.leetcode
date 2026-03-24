/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  const cnt = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    cnt[s1.charCodeAt(i) - 97]++
    cnt[s2.charCodeAt(i) - 97]--
  }
  if (cnt.every((v) => v === 0)) return true
  for (let i = s1.length; i < s2.length; i++) {
    cnt[s2.charCodeAt(i) - 97]--
    cnt[s2.charCodeAt(i - s1.length) - 97]++
    if (cnt.every((v) => v === 0)) return true
  }
  return false
}
