/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function(nums, freq) {
  const n = nums.length
  const count = new Map()
  // 使用懒删除的最大堆
  const heap = new MaxPriorityQueue({ priority: x => x[0] })
  const res = []
  for (let i = 0; i < n; i++) {
    const id = nums[i]
    const newFreq = (count.get(id) || 0) + freq[i]
    count.set(id, newFreq)
    heap.enqueue([newFreq, id])
    // 懒删除：堆顶的频率不等于实际频率时弹出
    while (!heap.isEmpty() && heap.front().element[0] !== count.get(heap.front().element[1])) {
      heap.dequeue()
    }
    res.push(heap.isEmpty() ? 0 : heap.front().element[0])
  }
  return res
}
