/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let res = 0
  for (const p of points) {
    const map = new Map()
    for (const q of points) {
      const d = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2
      map.set(d, (map.get(d) || 0) + 1)
    }
    for (const cnt of map.values()) res += cnt * (cnt - 1)
  }
  return res
}
