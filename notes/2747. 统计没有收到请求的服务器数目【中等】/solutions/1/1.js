/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
  // 排序 logs 按时间
  logs.sort((a, b) => a[1] - b[1])
  // 将 queries 按时间排序，记录原始下标
  const m = queries.length
  const idx = Array.from({ length: m }, (_, i) => i)
  idx.sort((a, b) => queries[a] - queries[b])
  const res = new Array(m)
  const cnt = new Map() // 服务器 -> 计数
  let active = 0 // 有请求的服务器数
  let left = 0,
    right = 0
  for (const i of idx) {
    const qr = queries[i]
    const ql = qr - x
    // 扩展右边界
    while (right < logs.length && logs[right][1] <= qr) {
      const sid = logs[right][0]
      const c = cnt.get(sid) || 0
      if (c === 0) active++
      cnt.set(sid, c + 1)
      right++
    }
    // 收缩左边界
    while (left < logs.length && logs[left][1] < ql) {
      const sid = logs[left][0]
      const c = cnt.get(sid)
      if (c === 1) {
        cnt.delete(sid)
        active--
      } else {
        cnt.set(sid, c - 1)
      }
      left++
    }
    res[i] = n - active
  }
  return res
}
