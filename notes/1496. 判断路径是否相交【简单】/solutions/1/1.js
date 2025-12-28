/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0
  let y = 0
  const visited = new Set()
  visited.add('0,0')

  for (const ch of path) {
    if (ch === 'N') y++
    else if (ch === 'S') y--
    else if (ch === 'E') x++
    else if (ch === 'W') x--

    const key = `${x},${y}`
    if (visited.has(key)) return true
    visited.add(key)
  }
  return false
}
