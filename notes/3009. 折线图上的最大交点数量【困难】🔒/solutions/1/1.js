/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  const kmpSearch = (text, pattern) => {
    const n = text.length,
      m = pattern.length
    const lps = new Array(m).fill(0)
    for (let i = 1, len = 0; i < m; ) {
      if (pattern[i] === pattern[len]) lps[i++] = ++len
      else if (len) len = lps[len - 1]
      else i++
    }
    const res = []
    for (let i = 0, j = 0; i < n; ) {
      if (text[i] === pattern[j]) {
        i++
        j++
        if (j === m) {
          res.push(i - m)
          j = lps[j - 1]
        }
      } else if (j) j = lps[j - 1]
      else i++
    }
    return res
  }

  const posA = kmpSearch(s, a)
  const posB = kmpSearch(s, b)
  const res = []
  let j = 0

  for (const i of posA) {
    while (j < posB.length && posB[j] < i - k) j++
    if (j < posB.length && posB[j] <= i + k) res.push(i)
  }

  return res
}
