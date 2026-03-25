/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const set = new Set(obstacles.map(([x, y]) => x + ',' + y))
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0]
  let x = 0,
    y = 0,
    d = 0,
    res = 0
  for (const cmd of commands) {
    if (cmd === -2) d = (d + 3) % 4
    else if (cmd === -1) d = (d + 1) % 4
    else {
      for (let i = 0; i < cmd; i++) {
        const nx = x + dx[d],
          ny = y + dy[d]
        if (set.has(nx + ',' + ny)) break
        x = nx
        y = ny
        res = Math.max(res, x * x + y * y)
      }
    }
  }
  return res
}
