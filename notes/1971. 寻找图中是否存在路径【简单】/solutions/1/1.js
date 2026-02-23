/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true

  const parent = Array.from({ length: n }, (_, i) => i)

  // 寻根节点
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]] // 路径压缩
      x = parent[x]
    }
    return x
  }

  // 合并两个节点所在的集合
  const unite = (a, b) => {
    const pa = find(a)
    const pb = find(b)
    if (pa !== pb) parent[pa] = pb // 合并
  }

  for (const [u, v] of edges) {
    unite(u, v)
  }

  return find(source) === find(destination)
}
