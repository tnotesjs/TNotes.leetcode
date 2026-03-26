/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function (nums, start, goal) {
  const visited = new Array(1001).fill(false)
  const queue = [start]
  visited[start] = true
  let steps = 0
  while (queue.length) {
    const size = queue.length
    steps++
    for (let i = 0; i < size; i++) {
      const x = queue[i]
      for (const num of nums) {
        for (const next of [x + num, x - num, x ^ num]) {
          if (next === goal) return steps
          if (next >= 0 && next <= 1000 && !visited[next]) {
            visited[next] = true
            queue.push(next)
          }
        }
      }
    }
    queue.splice(0, size)
  }
  return -1
}
