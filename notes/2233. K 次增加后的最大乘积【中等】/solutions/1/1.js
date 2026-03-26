/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function (nums, k) {
  const MOD = 1000000007n
  // 小顶堆
  const swap = (a, i, j) => {
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }
  const up = (a, i) => {
    while (i > 0) {
      const p = (i - 1) >> 1
      if (a[p] > a[i]) {
        swap(a, p, i)
        i = p
      } else break
    }
  }
  const down = (a, i, n) => {
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = l + 1
      if (l < n && a[l] < a[s]) s = l
      if (r < n && a[r] < a[s]) s = r
      if (s === i) break
      swap(a, i, s)
      i = s
    }
  }
  const heap = [...nums]
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--)
    down(heap, i, heap.length)
  for (let i = 0; i < k; i++) {
    heap[0]++
    down(heap, 0, heap.length)
  }
  let res = 1n
  for (const v of heap) res = (res * BigInt(v)) % MOD
  return Number(res)
}
