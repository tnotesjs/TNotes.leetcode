/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
  const freq = new Array(26).fill(0)
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++
  }
  const maxFreq = Math.max(...freq)
  // 最后一轮删除的是出现次数等于 maxFreq 的字符
  // 按它们在 s 中最后出现的位置排序
  const lastPos = new Array(26).fill(-1)
  for (let i = 0; i < s.length; i++) {
    lastPos[s.charCodeAt(i) - 97] = i
  }
  const chars = []
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      chars.push([lastPos[i], String.fromCharCode(i + 97)])
    }
  }
  chars.sort((a, b) => a[0] - b[0])
  return chars.map(c => c[1]).join('')
}
