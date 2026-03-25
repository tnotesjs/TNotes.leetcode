/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  // 最大堆：按增加一个学生带来的通过率增量降序
  const gain = (p, t) => (p + 1) / (t + 1) - p / t
  // 简易堆实现
  const heap = classes.map(([p, t]) => [gain(p, t), p, t])
  // 建堆
  const swap = (i, j) => {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  const up = (i) => {
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] < heap[i][0]) {
        swap(p, i)
        i = p
      } else break
    }
  }
  const down = (i) => {
    const n = heap.length
    while (true) {
      let max = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < n && heap[l][0] > heap[max][0]) max = l
      if (r < n && heap[r][0] > heap[max][0]) max = r
      if (max === i) break
      swap(i, max)
      i = max
    }
  }
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) down(i)
  for (let k = 0; k < extraStudents; k++) {
    let [, p, t] = heap[0]
    p++
    t++
    heap[0] = [gain(p, t), p, t]
    down(0)
  }
  let sum = 0
  for (const [, p, t] of heap) sum += p / t
  return sum / heap.length
}
