/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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
  let count = 0
  while (queue.length) {
    const cur = queue.shift()
    count++
    for (const next of graph[cur]) {
      inDegree[next]--
      if (inDegree[next] === 0) queue.push(next)
    }
  }
  return count === numCourses
}
