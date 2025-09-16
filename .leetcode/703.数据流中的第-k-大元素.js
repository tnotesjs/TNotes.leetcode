/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k
  this.heap = []

  // 初始化堆
  for (const num of nums) {
    this.add(num)
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // 向堆中添加元素
  this.heap.push(val)
  this.heapifyUp(this.heap.length - 1)

  // 如果堆的大小超过k，移除最小元素
  if (this.heap.length > this.k) {
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.heapifyDown(0)
  }

  // 返回第k大的元素（堆顶）
  return this.heap[0]
}

// 最小堆向上调整
KthLargest.prototype.heapifyUp = function (index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (this.heap[index] >= this.heap[parentIndex]) {
      break
    }
    ;[this.heap[index], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[index],
    ]
    index = parentIndex
  }
}

// 最小堆向下调整
KthLargest.prototype.heapifyDown = function (index) {
  while (index < this.heap.length) {
    let minIndex = index
    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[minIndex]
    ) {
      minIndex = leftChildIndex
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[minIndex]
    ) {
      minIndex = rightChildIndex
    }

    if (minIndex === index) {
      break
    }

    ;[this.heap[index], this.heap[minIndex]] = [
      this.heap[minIndex],
      this.heap[index],
    ]
    index = minIndex
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

var kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3))
console.log(kthLargest.add(5))
console.log(kthLargest.add(10))
console.log(kthLargest.add(9))
console.log(kthLargest.add(4))
