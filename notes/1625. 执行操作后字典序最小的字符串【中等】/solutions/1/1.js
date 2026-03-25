/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const n = s.length
  const visited = new Set()
  let res = s
  const queue = [s]
  visited.add(s)
  while (queue.length) {
    const cur = queue.shift()
    if (cur < res) res = cur
    // 操作 1：奇数位加 a
    let added = ''
    for (let i = 0; i < n; i++)
      added += i % 2 === 1 ? (parseInt(cur[i]) + a) % 10 : cur[i]
    if (!visited.has(added)) {
      visited.add(added)
      queue.push(added)
    }
    // 操作 2：右移 b 位
    const rotated = cur.slice(n - b) + cur.slice(0, n - b)
    if (!visited.has(rotated)) {
      visited.add(rotated)
      queue.push(rotated)
    }
  }
  return res
}
