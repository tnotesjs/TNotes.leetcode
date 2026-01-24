/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  // 特殊情况：n = 1 时，返回 0-9
  if (n === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // BFS：从 1-9 开始（避免前导零）
  let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // 逐位构建数字，共需要 n-1 次迭代
  for (let i = 1; i < n; i++) {
    const nextQueue = []

    for (const num of queue) {
      const lastDigit = num % 10

      // 尝试添加 lastDigit + k
      if (lastDigit + k <= 9) {
        nextQueue.push(num * 10 + lastDigit + k)
      }

      // 尝试添加 lastDigit - k（避免 k=0 时重复）
      if (k !== 0 && lastDigit - k >= 0) {
        nextQueue.push(num * 10 + lastDigit - k)
      }
    }

    queue = nextQueue
  }

  return queue
}
