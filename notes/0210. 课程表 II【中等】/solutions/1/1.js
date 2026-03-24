/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0)
  const graph = Array.from({ length: numCourses }, () => [])
  for (const [a, b] of prerequisites) {
    graph[b].push(a)
    inDegree[a]++
  }
  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }
  const order = []
  while (queue.length) {
    const cur = queue.shift()
    order.push(cur)
    for (const next of graph[cur]) {
      inDegree[next]--
      if (inDegree[next] === 0) queue.push(next)
    }
  }
  return order.length === numCourses ? order : []
}
