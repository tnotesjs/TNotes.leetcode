/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
  stones.sort((a, b) => a - b)
  const n = stones.length

  // max moves: choose the larger gap from the two ends
  const maxMoves = Math.max(
    stones[n - 1] - stones[1] - (n - 2),
    stones[n - 2] - stones[0] - (n - 2),
  )

  // min moves: sliding window
  let minMoves = n
  let j = 0
  for (let i = 0; i < n; i++) {
    while (j + 1 < n && stones[j + 1] - stones[i] + 1 <= n) j++
    const already = j - i + 1
    if (already === n - 1 && stones[j] - stones[i] + 1 === n - 1) {
      minMoves = Math.min(minMoves, 2)
    } else {
      minMoves = Math.min(minMoves, n - already)
    }
  }
  return [minMoves, maxMoves]
}
