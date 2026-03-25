/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length
  const getPos = (s) => {
    const r = Math.floor((s - 1) / n)
    const c = (s - 1) % n
    const row = n - 1 - r
    const col = r % 2 === 0 ? c : n - 1 - c
    return [row, col]
  }
  const visited = new Set([1])
  let queue = [1],
    steps = 0
  while (queue.length) {
    const next = []
    for (const cur of queue) {
      if (cur === n * n) return steps
      for (let i = 1; i <= 6 && cur + i <= n * n; i++) {
        const [r, c] = getPos(cur + i)
        let dest = board[r][c] === -1 ? cur + i : board[r][c]
        if (!visited.has(dest)) {
          visited.add(dest)
          next.push(dest)
        }
      }
    }
    queue = next
    steps++
  }
  return -1
}
