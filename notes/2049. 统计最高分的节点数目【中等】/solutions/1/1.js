/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
  const n = parents.length
  const children = Array.from({ length: n }, () => [])
  for (let i = 1; i < n; i++) children[parents[i]].push(i)
  const sz = new Array(n).fill(0)
  // 迭代后序遍历
  const stack = [0],
    order = []
  while (stack.length) {
    const u = stack.pop()
    order.push(u)
    for (const v of children[u]) stack.push(v)
  }
  order.reverse()
  for (const u of order) {
    sz[u] = 1
    for (const v of children[u]) sz[u] += sz[v]
  }
  let maxScore = 0,
    count = 0
  for (let i = 0; i < n; i++) {
    let score = 1,
      rem = n - 1
    for (const v of children[i]) {
      score *= sz[v]
      rem -= sz[v]
    }
    if (rem > 0) score *= rem
    if (score > maxScore) {
      maxScore = score
      count = 1
    } else if (score === maxScore) count++
  }
  return count
}
