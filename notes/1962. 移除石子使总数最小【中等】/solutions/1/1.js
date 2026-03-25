/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  // 最大堆
  const swap = (a, i, j) => {
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  const siftDown = (a, i, n) => {
    while (true) {
      let largest = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < n && a[l] > a[largest]) largest = l
      if (r < n && a[r] > a[largest]) largest = r
      if (largest === i) break
      swap(a, i, largest)
      i = largest
    }
  }
  const siftUp = (a, i) => {
    while (i > 0) {
      const p = (i - 1) >> 1
      if (a[i] > a[p]) {
        swap(a, i, p)
        i = p
      } else break
    }
  }
  // build heap
  const h = piles.slice()
  for (let i = (h.length >> 1) - 1; i >= 0; i--) siftDown(h, i, h.length)
  for (let i = 0; i < k; i++) {
    h[0] -= Math.floor(h[0] / 2)
    siftDown(h, 0, h.length)
  }
  return h.reduce((a, b) => a + b, 0)
}
