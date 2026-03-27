/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(queries, k) {
  const heap = new MaxPriorityQueue({ priority: x => x })
  const res = []
  for (const [x, y] of queries) {
    const dist = Math.abs(x) + Math.abs(y)
    if (heap.size() < k) {
      heap.enqueue(dist)
    } else if (dist < heap.front().element) {
      heap.dequeue()
      heap.enqueue(dist)
    }
    res.push(heap.size() < k ? -1 : heap.front().element)
  }
  return res
}
