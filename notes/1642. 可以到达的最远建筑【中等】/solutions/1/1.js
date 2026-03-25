/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  // 最小堆：将樯子用在最大的几次跳跃上
  const minHeap = []
  const push = (v) => {
    minHeap.push(v)
    let i = minHeap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (minHeap[p] <= minHeap[i]) break
      ;[minHeap[p], minHeap[i]] = [minHeap[i], minHeap[p]]
      i = p
    }
  }
  const pop = () => {
    const top = minHeap[0]
    const last = minHeap.pop()
    if (minHeap.length) {
      minHeap[0] = last
      let i = 0
      while (true) {
        let s = i,
          l = 2 * i + 1,
          r = 2 * i + 2
        if (l < minHeap.length && minHeap[l] < minHeap[s]) s = l
        if (r < minHeap.length && minHeap[r] < minHeap[s]) s = r
        if (s === i) break
        ;[minHeap[s], minHeap[i]] = [minHeap[i], minHeap[s]]
        i = s
      }
    }
    return top
  }
  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i]
    if (diff <= 0) continue
    push(diff)
    if (minHeap.length > ladders) bricks -= pop()
    if (bricks < 0) return i
  }
  return heights.length - 1
}
