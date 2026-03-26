/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function (circles) {
  const set = new Set()
  for (const [cx, cy, r] of circles) {
    for (let x = cx - r; x <= cx + r; x++) {
      for (let y = cy - r; y <= cy + r; y++) {
        if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r) {
          set.add(x * 1000 + y)
        }
      }
    }
  }
  return set.size
}
