/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
  if (s.length !== t.length) return false
  const cnt = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const diff = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26
    if (diff > 0) cnt[diff]++
  }
  for (let i = 1; i < 26; i++) {
    // 第 cnt[i] 次使用偏移 i 需要的操作编号是 i + 26 * (cnt[i] - 1)
    if (cnt[i] > 0 && i + 26 * (cnt[i] - 1) > k) return false
  }
  return true
}
