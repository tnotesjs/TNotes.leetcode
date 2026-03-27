/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
  const n = s.length
  for (let len = 1; len <= n; len++) {
    if (n % len !== 0) continue
    // 检查每个长度为 len 的段是否互为同位字符串
    const base = getFreq(s, 0, len)
    let valid = true
    for (let i = len; i < n; i += len) {
      const freq = getFreq(s, i, len)
      if (!arrEq(base, freq)) { valid = false; break }
    }
    if (valid) return len
  }
  return n
}

function getFreq(s, start, len) {
  const freq = new Array(26).fill(0)
  for (let i = start; i < start + len; i++) {
    freq[s.charCodeAt(i) - 97]++
  }
  return freq
}

function arrEq(a, b) {
  for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false
  return true
}
