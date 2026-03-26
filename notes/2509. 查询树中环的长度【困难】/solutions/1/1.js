/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function (n, queries) {
  return queries.map(([a, b]) => {
    let len = 1
    while (a !== b) {
      if (a > b) a >>= 1
      else b >>= 1
      len++
    }
    return len
  })
}
