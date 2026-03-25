/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  const limit = 6000
  const ban = new Set(forbidden)
  // visited[pos][dir]: dir=0 上次前跳, dir=1 上次后跳
  const visited = Array.from({ length: limit + 1 }, () => [false, false])
  const queue = [[0, 0, 0]] // [pos, steps, lastBack]
  visited[0][0] = true
  while (queue.length) {
    const [pos, steps, lastBack] = queue.shift()
    if (pos === x) return steps
    // 前跳
    const fwd = pos + a
    if (fwd <= limit && !ban.has(fwd) && !visited[fwd][0]) {
      visited[fwd][0] = true
      queue.push([fwd, steps + 1, 0])
    }
    // 后跳（不能连续后跳）
    if (!lastBack) {
      const bwd = pos - b
      if (bwd >= 0 && !ban.has(bwd) && !visited[bwd][1]) {
        visited[bwd][1] = true
        queue.push([bwd, steps + 1, 1])
      }
    }
  }
  return -1
}
