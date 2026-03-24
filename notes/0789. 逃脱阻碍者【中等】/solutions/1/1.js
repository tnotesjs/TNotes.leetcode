/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  const dist = Math.abs(target[0]) + Math.abs(target[1])
  for (const [gx, gy] of ghosts) {
    if (Math.abs(gx - target[0]) + Math.abs(gy - target[1]) <= dist)
      return false
  }
  return true
}
