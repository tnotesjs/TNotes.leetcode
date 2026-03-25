/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0])
  const n = events.length
  let i = 0,
    ans = 0
  // 最小堆（简单实现）
  const heap = []
  const push = (v) => {
    heap.push(v)
    let idx = heap.length - 1
    while (idx > 0) {
      const p = (idx - 1) >> 1
      if (heap[p] <= heap[idx]) break
      ;[heap[p], heap[idx]] = [heap[idx], heap[p]]
      idx = p
    }
  }
  const pop = () => {
    const val = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let idx = 0
      while (true) {
        let smallest = idx
        const l = 2 * idx + 1,
          r = 2 * idx + 2
        if (l < heap.length && heap[l] < heap[smallest]) smallest = l
        if (r < heap.length && heap[r] < heap[smallest]) smallest = r
        if (smallest === idx) break
        ;[heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
        idx = smallest
      }
    }
    return val
  }
  let day = 1
  while (i < n || heap.length > 0) {
    if (heap.length === 0 && i < n) day = events[i][0]
    while (i < n && events[i][0] === day) push(events[i++][1])
    while (heap.length > 0 && heap[0] < day) pop()
    if (heap.length > 0) {
      pop()
      ans++
    }
    day++
  }
  return ans
}
