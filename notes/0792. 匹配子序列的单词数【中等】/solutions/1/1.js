/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const buckets = Array.from({ length: 26 }, () => [])
  for (const word of words) buckets[word.charCodeAt(0) - 97].push(word)
  let res = 0
  for (const c of s) {
    const bucket = buckets[c.charCodeAt(0) - 97]
    buckets[c.charCodeAt(0) - 97] = []
    for (const word of bucket) {
      if (word.length === 1) {
        res++
      } else {
        const rest = word.slice(1)
        buckets[rest.charCodeAt(0) - 97].push(rest)
      }
    }
  }
  return res
}
