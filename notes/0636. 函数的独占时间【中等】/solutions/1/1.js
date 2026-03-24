/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const res = new Array(n).fill(0)
  const stack = []
  let prev = 0
  for (const log of logs) {
    const parts = log.split(':')
    const id = +parts[0]
    const type = parts[1]
    const time = +parts[2]
    if (type === 'start') {
      if (stack.length) res[stack[stack.length - 1]] += time - prev
      stack.push(id)
      prev = time
    } else {
      res[stack.pop()] += time - prev + 1
      prev = time + 1
    }
  }
  return res
}
