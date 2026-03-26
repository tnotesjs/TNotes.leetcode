/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const n = edges.length
  const getDist = (start) => {
    const dist = new Array(n).fill(-1)
    let d = 0,
      cur = start
    while (cur !== -1 && dist[cur] === -1) {
      dist[cur] = d++
      cur = edges[cur]
    }
    return dist
  }
  const dist1 = getDist(node1)
  const dist2 = getDist(node2)
  let minDist = Infinity,
    ans = -1
  for (let i = 0; i < n; i++) {
    if (dist1[i] !== -1 && dist2[i] !== -1) {
      const d = Math.max(dist1[i], dist2[i])
      if (d < minDist) {
        minDist = d
        ans = i
      }
    }
  }
  return ans
}
