/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
  const map = new Map()
  const n = s.length
  for (let i = 0; i < n; i++) {
    let val = 0
    for (let j = i; j < Math.min(i + 30, n); j++) {
      val = val * 2 + (s.charCodeAt(j) - 48)
      if (!map.has(val)) map.set(val, [i, j])
      if (val === 0) break
    }
  }
  return queries.map(([f, sc]) => map.get(f ^ sc) || [-1, -1])
}
