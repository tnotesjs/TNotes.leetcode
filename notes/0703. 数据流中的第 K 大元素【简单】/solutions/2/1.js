/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k
  // 使用最小堆
  this.minHeap = new MinPriorityQueue()

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
  this.minHeap.enqueue(val)

  // 如果堆的大小超过k，移除最小元素
  if (this.minHeap.size() > this.k) {
    this.minHeap.dequeue()
  }

  // 返回第k大的元素（堆顶）
  return this.minHeap.front()
}
