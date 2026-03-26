/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  const res = []
  let i = 25 // 从最大字符开始
  while (i >= 0) {
    if (freq[i] === 0) {
      i--
      continue
    }
    const count = Math.min(freq[i], repeatLimit)
    for (let k = 0; k < count; k++) res.push(String.fromCharCode(97 + i))
    freq[i] -= count
    if (freq[i] > 0) {
      // 找下一个可用字符插入
      let j = i - 1
      while (j >= 0 && freq[j] === 0) j--
      if (j < 0) break
      res.push(String.fromCharCode(97 + j))
      freq[j]--
    } else {
      i--
    }
  }
  return res.join('')
}
