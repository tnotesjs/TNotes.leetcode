/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const match = (query) => {
    let j = 0
    for (const c of query) {
      if (j < pattern.length && c === pattern[j]) {
        j++
      } else if (c >= 'A' && c <= 'Z') {
        return false
      }
    }
    return j === pattern.length
  }
  return queries.map(match)
}
