/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length
  const visited = new Array(n).fill(false)
  const queue = [start]
  visited[start] = true
  while (queue.length > 0) {
    const i = queue.shift()
    if (arr[i] === 0) return true
    for (const next of [i + arr[i], i - arr[i]]) {
      if (next >= 0 && next < n && !visited[next]) {
        visited[next] = true
        queue.push(next)
      }
    }
  }
  return false
}
