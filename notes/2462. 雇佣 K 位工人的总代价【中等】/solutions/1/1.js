/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  // 最小堆实现
  class MinHeap {
    constructor() { this.h = [] }
    push(v) {
      this.h.push(v)
      let i = this.h.length - 1
      while (i > 0) {
        const p = (i - 1) >> 1
        if (this.h[p] <= this.h[i]) break
        ;[this.h[p], this.h[i]] = [this.h[i], this.h[p]]
        i = p
      }
    }
    pop() {
      const top = this.h[0]
      const last = this.h.pop()
      if (this.h.length > 0) {
        this.h[0] = last
        let i = 0
        while (true) {
          let s = i, l = 2 * i + 1, r = 2 * i + 2
          if (l < this.h.length && this.h[l] < this.h[s]) s = l
          if (r < this.h.length && this.h[r] < this.h[s]) s = r
          if (s === i) break
          ;[this.h[s], this.h[i]] = [this.h[i], this.h[s]]
          i = s
        }
      }
      return top
    }
    peek() { return this.h[0] }
    get size() { return this.h.length }
  }

  const left = new MinHeap(), right = new MinHeap()
  let lo = 0, hi = costs.length - 1
  for (let i = 0; i < candidates && lo <= hi; i++) left.push(costs[lo++])
  for (let i = 0; i < candidates && lo <= hi; i++) right.push(costs[hi--])

  let total = 0
  for (let i = 0; i < k; i++) {
    const lv = left.size ? left.peek() : Infinity
    const rv = right.size ? right.peek() : Infinity
    if (lv <= rv) {
      total += left.pop()
      if (lo <= hi) left.push(costs[lo++])
    } else {
      total += right.pop()
      if (lo <= hi) right.push(costs[hi--])
    }
  }
  return total
}
