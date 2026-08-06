/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 建图 + 入度
  const inDegree = new Array(numCourses).fill(0)
  const graph = Array.from({ length: numCourses }, () => [])
  for (const [a, b] of prerequisites) {
    graph[b].push(a) // 修完 b 之后可以解锁哪些课
    inDegree[a]++ // 解锁课 a 还差几门先修课
  }
  // 把「已经能修」的课入队
  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i)
  }
  // BFS 不断「修课」
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
