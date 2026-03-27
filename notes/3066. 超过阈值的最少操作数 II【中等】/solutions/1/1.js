/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  // 使用最小堆
  const heap = new MinPriorityQueue()
  for (const num of nums) heap.enqueue(num)
  let ops = 0
  while (heap.size() >= 2 && heap.front().element < k) {
    const x = heap.dequeue().element
    const y = heap.dequeue().element
    heap.enqueue(Math.min(x, y) * 2 + Math.max(x, y))
    ops++
  }
  return ops
}
