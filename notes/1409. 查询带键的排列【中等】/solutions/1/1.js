/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const P = Array.from({ length: m }, (_, i) => i + 1)
  const res = []
  for (const q of queries) {
    const idx = P.indexOf(q)
    res.push(idx)
    P.splice(idx, 1)
    P.unshift(q)
  }
  return res
}
