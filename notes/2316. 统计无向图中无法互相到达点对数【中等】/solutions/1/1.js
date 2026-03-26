/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i)
  const size = new Array(n).fill(1)
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  for (const [a, b] of edges) {
    const ra = find(a),
      rb = find(b)
    if (ra !== rb) {
      if (size[ra] < size[rb]) {
        parent[ra] = rb
        size[rb] += size[ra]
      } else {
        parent[rb] = ra
        size[ra] += size[rb]
      }
    }
  }
  let res = 0,
    visited = 0
  for (let i = 0; i < n; i++) {
    if (parent[i] === i) {
      res += visited * size[i]
      visited += size[i]
    }
  }
  return res
}
