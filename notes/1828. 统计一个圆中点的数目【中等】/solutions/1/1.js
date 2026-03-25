/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  return queries.map(([cx, cy, r]) => {
    let count = 0
    const r2 = r * r
    for (const [px, py] of points) {
      if ((px - cx) ** 2 + (py - cy) ** 2 <= r2) count++
    }
    return count
  })
}
