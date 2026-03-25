/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  const n = apples.length
  // 最小堆：[过期日, 剩余数量]
  const heap = []
  const push = (v) => {
    heap.push(v)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  const pop = () => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i
        const l = 2 * i + 1,
          r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r
        if (s === i) break
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      }
    }
    return top
  }
  let res = 0
  for (let i = 0; i < n || heap.length > 0; i++) {
    if (i < n && apples[i] > 0) push([i + days[i], apples[i]])
    while (heap.length > 0 && heap[0][0] <= i) pop()
    if (heap.length > 0) {
      heap[0][1]--
      res++
      if (heap[0][1] === 0) pop()
    }
  }
  return res
}
