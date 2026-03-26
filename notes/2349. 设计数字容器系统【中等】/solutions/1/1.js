var NumberContainers = function () {
  this.idxToNum = new Map() // index -> number
  this.numToIdxs = new Map() // number -> SortedSet (用 min-heap 模拟)
}

NumberContainers.prototype.change = function (index, number) {
  this.idxToNum.set(index, number)
  if (!this.numToIdxs.has(number)) this.numToIdxs.set(number, [])
  const heap = this.numToIdxs.get(number)
  heap.push(index)
  // 上浮
  let i = heap.length - 1
  while (i > 0) {
    const p = (i - 1) >> 1
    if (heap[p] <= heap[i]) break
    ;[heap[p], heap[i]] = [heap[i], heap[p]]
    i = p
  }
}

NumberContainers.prototype.find = function (number) {
  if (!this.numToIdxs.has(number)) return -1
  const heap = this.numToIdxs.get(number)
  // 懒删除：堆顶如果已经不指向 number，弹出
  while (heap.length > 0 && this.idxToNum.get(heap[0]) !== number) {
    // 弹出堆顶
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i,
          l = 2 * i + 1,
          r = 2 * i + 2
        if (l < heap.length && heap[l] < heap[s]) s = l
        if (r < heap.length && heap[r] < heap[s]) s = r
        if (s === i) break
        ;[heap[i], heap[s]] = [heap[s], heap[i]]
        i = s
      }
    }
  }
  return heap.length > 0 ? heap[0] : -1
}
