/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {}

// 计数数组 + 交替从小到大、从大到小取字符
var sortString = function (s) {
  const freq = new Array(26).fill(0)
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++
  }

  const res = []
  const n = s.length

  while (res.length < n) {
    // 从小到大拿一次
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        res.push(String.fromCharCode(97 + i))
        freq[i]--
      }
    }
    // 从大到小拿一次
    for (let i = 25; i >= 0 && res.length < n; i--) {
      if (freq[i] > 0) {
        res.push(String.fromCharCode(97 + i))
        freq[i]--
      }
    }
  }

  return res.join('')
}
