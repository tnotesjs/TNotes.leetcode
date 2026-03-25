/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  // rank[i][j]: j 在 i 的偏好列表中的排名
  const rank = Array.from({ length: n }, () => new Array(n))
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n - 1; j++) rank[i][preferences[i][j]] = j
  const partner = new Array(n)
  for (const [a, b] of pairs) {
    partner[a] = b
    partner[b] = a
  }
  let res = 0
  for (let x = 0; x < n; x++) {
    const y = partner[x]
    for (const u of preferences[x]) {
      if (u === y) break // 之后的人 x 不会更喜欢
      const v = partner[u]
      if (rank[u][x] < rank[u][v]) {
        res++
        break
      }
    }
  }
  return res
}
