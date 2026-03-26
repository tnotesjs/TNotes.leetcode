/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function (start, target, specialRoads) {
  const key = (x, y) => x + ',' + y
  const points = [
    [start[0], start[1]],
    [target[0], target[1]],
  ]
  for (const [x1, y1, x2, y2, cost] of specialRoads) {
    points.push([x2, y2])
  }

  const n = points.length
  const dist = new Array(n).fill(Infinity)
  dist[0] = 0
  const visited = new Array(n).fill(false)

  for (let iter = 0; iter < n; iter++) {
    let minDist = Infinity,
      minIdx = -1
    for (let i = 0; i < n; i++) {
      if (!visited[i] && dist[i] < minDist) {
        minDist = dist[i]
        minIdx = i
      }
    }
    if (minIdx === -1) break
    if (minIdx === 1) return minDist
    visited[minIdx] = true
    const [mx, my] = points[minIdx]

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        const d =
          minDist + Math.abs(points[i][0] - mx) + Math.abs(points[i][1] - my)
        if (d < dist[i]) dist[i] = d
      }
    }
    for (const [x1, y1, x2, y2, cost] of specialRoads) {
      const idx = points.findIndex((p) => p[0] === x2 && p[1] === y2)
      if (idx !== -1 && !visited[idx]) {
        const d = minDist + Math.abs(x1 - mx) + Math.abs(y1 - my) + cost
        if (d < dist[idx]) dist[idx] = d
      }
    }
  }
  return dist[1]
}
