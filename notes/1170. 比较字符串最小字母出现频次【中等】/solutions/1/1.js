/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  function f(s) {
    let minChar = 'z',
      count = 0
    for (const c of s) {
      if (c < minChar) {
        minChar = c
        count = 1
      } else if (c === minChar) count++
    }
    return count
  }
  const wf = words.map(f).sort((a, b) => a - b)
  return queries.map((q) => {
    const fq = f(q)
    let lo = 0,
      hi = wf.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (wf[mid] <= fq) lo = mid + 1
      else hi = mid
    }
    return wf.length - lo
  })
}
