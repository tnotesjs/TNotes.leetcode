var SmallestInfiniteSet = function () {
  this.cur = 1
  this.addedBack = [] // min-heap
  this.inHeap = new Set()
}

SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.addedBack.length > 0 && this.addedBack[0] < this.cur) {
    const val = this._heapPop()
    this.inHeap.delete(val)
    return val
  }
  return this.cur++
}

SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num < this.cur && !this.inHeap.has(num)) {
    this.inHeap.add(num)
    this._heapPush(num)
  }
}

SmallestInfiniteSet.prototype._heapPush = function (val) {
  this.addedBack.push(val)
  let i = this.addedBack.length - 1
  while (i > 0) {
    const p = (i - 1) >> 1
    if (this.addedBack[p] <= this.addedBack[i]) break
    ;[this.addedBack[p], this.addedBack[i]] = [
      this.addedBack[i],
      this.addedBack[p],
    ]
    i = p
  }
}

SmallestInfiniteSet.prototype._heapPop = function () {
  const top = this.addedBack[0]
  const last = this.addedBack.pop()
  if (this.addedBack.length > 0) {
    this.addedBack[0] = last
    let i = 0
    while (true) {
      let smallest = i
      const l = 2 * i + 1,
        r = 2 * i + 2
      if (
        l < this.addedBack.length &&
        this.addedBack[l] < this.addedBack[smallest]
      )
        smallest = l
      if (
        r < this.addedBack.length &&
        this.addedBack[r] < this.addedBack[smallest]
      )
        smallest = r
      if (smallest === i) break
      ;[this.addedBack[i], this.addedBack[smallest]] = [
        this.addedBack[smallest],
        this.addedBack[i],
      ]
      i = smallest
    }
  }
  return top
}
