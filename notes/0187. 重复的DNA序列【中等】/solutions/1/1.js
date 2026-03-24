/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set()
  const res = new Set()
  for (let i = 0; i <= s.length - 10; i++) {
    const sub = s.slice(i, i + 10)
    if (seen.has(sub)) res.add(sub)
    else seen.add(sub)
  }
  return [...res]
}
