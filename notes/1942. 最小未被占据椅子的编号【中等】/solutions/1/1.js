/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  const n = times.length
  const order = Array.from({ length: n }, (_, i) => i)
  order.sort((a, b) => times[a][0] - times[b][0])
  const chairs = [] // min-heap of available chairs
  const leaving = [] // min-heap of [leaveTime, chair]
  let nextChair = 0

  const push = (heap, val) => {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p] > heap[i]) {
        ;[heap[p], heap[i]] = [heap[i], heap[p]]
        i = p
      } else break
    }
  }
  const pop = (heap) => {
    const top = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    let i = 0
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < heap.length && heap[l] < heap[s]) s = l
      if (r < heap.length && heap[r] < heap[s]) s = r
      if (s !== i) {
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      } else break
    }
    return top
  }
  const pushL = (heap, val) => {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] > heap[i][0]) {
        ;[heap[p], heap[i]] = [heap[i], heap[p]]
        i = p
      } else break
    }
  }
  const popL = (heap) => {
    const top = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
    let i = 0
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r
      if (s !== i) {
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      } else break
    }
    return top
  }

  for (const idx of order) {
    const [arrive, leave] = times[idx]
    while (leaving.length && leaving[0][0] <= arrive) {
      const [, c] = popL(leaving)
      push(chairs, c)
    }
    let chair
    if (chairs.length) chair = pop(chairs)
    else chair = nextChair++
    if (idx === targetFriend) return chair
    pushL(leaving, [leave, chair])
  }
  return -1
}
