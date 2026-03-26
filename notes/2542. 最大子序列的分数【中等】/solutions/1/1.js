/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const n = nums1.length
  const ids = Array.from({ length: n }, (_, i) => i)
  ids.sort((a, b) => nums2[b] - nums2[a])
  // 最小堆
  const h = []
  const push = (v) => {
    h.push(v)
    let i = h.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (h[p] <= h[i]) break
      ;[h[p], h[i]] = [h[i], h[p]]
      i = p
    }
  }
  const pop = () => {
    const top = h[0]
    const last = h.pop()
    if (h.length > 0) {
      h[0] = last
      let i = 0
      while (true) {
        let m = i, l = 2 * i + 1, r = 2 * i + 2
        if (l < h.length && h[l] < h[m]) m = l
        if (r < h.length && h[r] < h[m]) m = r
        if (m === i) break
        ;[h[i], h[m]] = [h[m], h[i]]
        i = m
      }
    }
    return top
  }
  let sum = 0, ans = 0
  for (const i of ids) {
    push(nums1[i])
    sum += nums1[i]
    if (h.length > k) sum -= pop()
    if (h.length === k) ans = Math.max(ans, sum * nums2[i])
  }
  return ans
}
