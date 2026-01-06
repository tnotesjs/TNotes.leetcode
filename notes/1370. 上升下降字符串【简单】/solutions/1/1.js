/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  // 统计每个字符的出现次数
  const freq = new Array(26).fill(0)
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++
  }

  const res = []
  const n = s.length

  while (res.length < n) {
    // 步骤1-3: 从小到大依次选择每个字符（升序）
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        res.push(String.fromCharCode(97 + i))
        freq[i]--
      }
    }
    // 步骤4-6: 从大到小依次选择每个字符（降序）
    for (let i = 25; i >= 0; i--) {
      if (freq[i] > 0) {
        res.push(String.fromCharCode(97 + i))
        freq[i]--
      }
    }
  }

  return res.join('')
}
