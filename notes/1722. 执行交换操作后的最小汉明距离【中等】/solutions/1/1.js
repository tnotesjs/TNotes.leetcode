/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length
  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  for (const [a, b] of allowedSwaps) {
    const pa = find(a),
      pb = find(b)
    if (pa !== pb) parent[pa] = pb
  }
  const groups = new Map()
  for (let i = 0; i < n; i++) {
    const p = find(i)
    if (!groups.has(p)) groups.set(p, [])
    groups.get(p).push(i)
  }
  let res = 0
  for (const indices of groups.values()) {
    const cnt = new Map()
    for (const i of indices) cnt.set(source[i], (cnt.get(source[i]) || 0) + 1)
    for (const i of indices) {
      if (cnt.get(target[i]) > 0) cnt.set(target[i], cnt.get(target[i]) - 1)
      else res++
    }
  }
  return res
}
