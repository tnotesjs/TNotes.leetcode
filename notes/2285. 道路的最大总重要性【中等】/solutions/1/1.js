/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  const degree = new Array(n).fill(0)
  for (const [a, b] of roads) {
    degree[a]++
    degree[b]++
  }
  degree.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < n; i++) {
    res += (i + 1) * degree[i]
  }
  return res
}
