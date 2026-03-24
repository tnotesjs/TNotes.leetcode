/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const dead = new Set(deadends)
  if (dead.has('0000')) return -1
  const visited = new Set(['0000'])
  const queue = ['0000']
  let step = 0
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      if (cur === target) return step
      for (let j = 0; j < 4; j++) {
        for (const d of [-1, 1]) {
          const arr = cur.split('')
          arr[j] = '' + ((+arr[j] + d + 10) % 10)
          const next = arr.join('')
          if (!visited.has(next) && !dead.has(next)) {
            visited.add(next)
            queue.push(next)
          }
        }
      }
    }
    step++
  }
  return -1
}
