/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  const heap = new MaxHeap()
  let total = 0
  for (const num of nums) {
    heap.push(num)
    total += num
  }
  const target = total / 2
  let reduced = 0,
    ops = 0
  while (reduced < target) {
    const max = heap.pop()
    const half = max / 2
    reduced += half
    heap.push(half)
    ops++
  }
  return ops
}

class MaxHeap {
  constructor() {
    this.heap = []
  }
  push(val) {
    this.heap.push(val)
    let i = this.heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (this.heap[p] >= this.heap[i]) break
      ;[this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
      i = p
    }
  }
  pop() {
    const top = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = last
      let i = 0
      while (true) {
        let max = i
        const l = 2 * i + 1,
          r = 2 * i + 2
        if (l < this.heap.length && this.heap[l] > this.heap[max]) max = l
        if (r < this.heap.length && this.heap[r] > this.heap[max]) max = r
        if (max === i) break
        ;[this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]]
        i = max
      }
    }
    return top
  }
}
