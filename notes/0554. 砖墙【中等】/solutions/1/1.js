/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const map = new Map()
  for (const row of wall) {
    let sum = 0
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  let maxGap = 0
  for (const v of map.values()) {
    maxGap = Math.max(maxGap, v)
  }
  return wall.length - maxGap
}
