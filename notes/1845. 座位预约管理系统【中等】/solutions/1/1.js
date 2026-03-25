var SeatManager = function (n) {
  // 最小堆
  this.heap = []
  for (let i = 1; i <= n; i++) this.heap.push(i)
}

SeatManager.prototype.reserve = function () {
  // pop min
  const top = this.heap[0]
  const last = this.heap.pop()
  if (this.heap.length) {
    this.heap[0] = last
    let i = 0
    while (true) {
      let m = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < this.heap.length && this.heap[l] < this.heap[m]) m = l
      if (r < this.heap.length && this.heap[r] < this.heap[m]) m = r
      if (m === i) break
      ;[this.heap[i], this.heap[m]] = [this.heap[m], this.heap[i]]
      i = m
    }
  }
  return top
}

SeatManager.prototype.unreserve = function (seatNumber) {
  this.heap.push(seatNumber)
  let i = this.heap.length - 1
  while (i > 0) {
    const p = (i - 1) >> 1
    if (this.heap[p] > this.heap[i]) {
      ;[this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
      i = p
    } else break
  }
}
