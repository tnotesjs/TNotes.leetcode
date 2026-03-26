var maximumSumQueries = function (nums1, nums2, queries) {
  const n = nums1.length
  const pairs = Array.from({ length: n }, (_, i) => [nums1[i], nums2[i]])
  pairs.sort((a, b) => b[0] - a[0])

  const q = queries.map((query, i) => [...query, i])
  q.sort((a, b) => b[0] - a[0])

  const ans = new Array(queries.length)
  const stack = [] // [nums2, sum], nums2 increasing, sum decreasing
  let j = 0

  for (const [x, y, idx] of q) {
    while (j < n && pairs[j][0] >= x) {
      const [a, b] = pairs[j]
      const s = a + b
      while (stack.length > 0 && stack[stack.length - 1][1] <= s) stack.pop()
      if (stack.length === 0 || stack[stack.length - 1][0] < b)
        stack.push([b, s])
      j++
    }
    let lo = 0,
      hi = stack.length - 1,
      res = -1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (stack[mid][0] >= y) {
        res = stack[mid][1]
        hi = mid - 1
      } else lo = mid + 1
    }
    ans[idx] = res
  }
  return ans
}
