/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  // 每个字符记录前 3 长的连续段长度
  const top = Array.from({ length: 26 }, () => [0, 0, 0])
  let i = 0
  while (i < s.length) {
    const ch = s.charCodeAt(i) - 97
    let j = i
    while (j < s.length && s[j] === s[i]) j++
    const len = j - i
    const t = top[ch]
    if (len > t[0]) {
      t[2] = t[1]
      t[1] = t[0]
      t[0] = len
    } else if (len > t[1]) {
      t[2] = t[1]
      t[1] = len
    } else if (len > t[2]) {
      t[2] = len
    }
    i = j
  }
  let ans = -1
  for (let ch = 0; ch < 26; ch++) {
    const [a, b, c] = top[ch]
    ans = Math.max(ans, a - 2, Math.min(a - 1, b), c)
  }
  return ans <= 0 ? -1 : ans
}
