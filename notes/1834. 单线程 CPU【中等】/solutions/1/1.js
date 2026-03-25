/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  const n = tasks.length
  const idx = Array.from({ length: n }, (_, i) => i)
  idx.sort((a, b) => tasks[a][0] - tasks[b][0])
  // 最小堆：[processingTime, originalIndex]
  const heap = []
  const push = (v) => {
    heap.push(v)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] > v[0] || (heap[p][0] === v[0] && heap[p][1] > v[1])) {
        heap[i] = heap[p]
        i = p
      } else break
    }
    heap[i] = v
  }
  const pop = () => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length) {
      heap[0] = last
      let i = 0
      while (true) {
        let m = i,
          l = 2 * i + 1,
          r = 2 * i + 2
        if (
          l < heap.length &&
          (heap[l][0] < heap[m][0] ||
            (heap[l][0] === heap[m][0] && heap[l][1] < heap[m][1]))
        )
          m = l
        if (
          r < heap.length &&
          (heap[r][0] < heap[m][0] ||
            (heap[r][0] === heap[m][0] && heap[r][1] < heap[m][1]))
        )
          m = r
        if (m === i) break
        ;[heap[i], heap[m]] = [heap[m], heap[i]]
        i = m
      }
    }
    return top
  }
  const ans = []
  let time = 0,
    j = 0
  while (ans.length < n) {
    if (heap.length === 0 && j < n && tasks[idx[j]][0] > time) {
      time = tasks[idx[j]][0]
    }
    while (j < n && tasks[idx[j]][0] <= time) {
      push([tasks[idx[j]][1], idx[j]])
      j++
    }
    const [pt, oi] = pop()
    ans.push(oi)
    time += pt
  }
  return ans
}
