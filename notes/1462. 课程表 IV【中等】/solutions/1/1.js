/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const n = numCourses
  // Floyd-Warshall 求传递闭包
  const reach = Array.from({ length: n }, () => new Uint8Array(n))
  for (const [u, v] of prerequisites) reach[u][v] = 1
  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (reach[i][k] && reach[k][j]) reach[i][j] = 1
  return queries.map(([u, v]) => !!reach[u][v])
}
