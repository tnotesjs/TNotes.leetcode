/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function(s) {
  const freq = new Array(26).fill(0)
  for (const c of s) {
    if (c !== '?') freq[c.charCodeAt(0) - 97]++
  }
  // 收集所有 ? 位置需要填入的字符
  const toFill = []
  for (const c of s) {
    if (c === '?') {
      // 找频率最小的字母（字典序最小）
      let minIdx = 0
      for (let i = 1; i < 26; i++) {
        if (freq[i] < freq[minIdx]) minIdx = i
      }
      toFill.push(minIdx)
      freq[minIdx]++
    }
  }
  // 排序后按顺序填入 ? 位置，使字典序最小
  toFill.sort((a, b) => a - b)
  let idx = 0
  let res = ''
  for (const c of s) {
    if (c === '?') res += String.fromCharCode(97 + toFill[idx++])
    else res += c
  }
  return res
}
