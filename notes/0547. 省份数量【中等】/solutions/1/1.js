/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  let count = n
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        const ri = find(i),
          rj = find(j)
        if (ri !== rj) {
          parent[ri] = rj
          count--
        }
      }
    }
  }
  return count
}
