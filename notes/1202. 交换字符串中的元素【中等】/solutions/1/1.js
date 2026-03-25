/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length
  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])))
  const union = (a, b) => (parent[find(a)] = find(b))
  for (const [a, b] of pairs) union(a, b)
  const groups = new Map()
  for (let i = 0; i < n; i++) {
    const root = find(i)
    if (!groups.has(root)) groups.set(root, [])
    groups.get(root).push(i)
  }
  const res = [...s]
  for (const indices of groups.values()) {
    const chars = indices.map((i) => s[i]).sort()
    indices.sort((a, b) => a - b)
    for (let i = 0; i < indices.length; i++) {
      res[indices[i]] = chars[i]
    }
  }
  return res.join('')
}
