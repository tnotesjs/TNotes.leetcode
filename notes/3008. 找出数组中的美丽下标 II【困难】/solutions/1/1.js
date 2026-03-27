/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  const kmpSearch = (text, pattern) => {
    const m = pattern.length
    const fail = new Int32Array(m)
    for (let i = 1; i < m; i++) {
      let j = fail[i - 1]
      while (j > 0 && pattern[j] !== pattern[i]) j = fail[j - 1]
      if (pattern[j] === pattern[i]) j++
      fail[i] = j
    }
    const positions = []
    let j = 0
    for (let i = 0; i < text.length; i++) {
      while (j > 0 && text[i] !== pattern[j]) j = fail[j - 1]
      if (text[i] === pattern[j]) j++
      if (j === m) {
        positions.push(i - m + 1)
        j = fail[j - 1]
      }
    }
    return positions
  }
  const posA = kmpSearch(s, a)
  const posB = kmpSearch(s, b)
  const res = []
  for (const i of posA) {
    let lo = 0,
      hi = posB.length - 1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (posB[mid] < i - k) lo = mid + 1
      else hi = mid - 1
    }
    if (lo < posB.length && posB[lo] <= i + k) {
      res.push(i)
    }
  }
  return res
}
