/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const res = []
  // 最小堆：[sum, i, j]
  const heap = []
  const push = (val) => {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  const pop = () => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let min = i
        const l = 2 * i + 1,
          r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[min][0]) min = l
        if (r < heap.length && heap[r][0] < heap[min][0]) min = r
        if (min === i) break
        ;[heap[i], heap[min]] = [heap[min], heap[i]]
        i = min
      }
    }
    return top
  }
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    push([nums1[i] + nums2[0], i, 0])
  }
  while (heap.length > 0 && res.length < k) {
    const [, i, j] = pop()
    res.push([nums1[i], nums2[j]])
    if (j + 1 < nums2.length) push([nums1[i] + nums2[j + 1], i, j + 1])
  }
  return res
}
