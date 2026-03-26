/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  // 用取反实现最大堆
  const heap = nums.map((x) => -x)
  const n = heap.length
  const siftDown = (i) => {
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < n && heap[l] < heap[s]) s = l
      if (r < n && heap[r] < heap[s]) s = r
      if (s === i) break
      ;[heap[i], heap[s]] = [heap[s], heap[i]]
      i = s
    }
  }
  for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(i)

  let score = 0
  for (let i = 0; i < k; i++) {
    const mx = -heap[0]
    score += mx
    heap[0] = -Math.ceil(mx / 3)
    siftDown(0)
  }
  return score
}
