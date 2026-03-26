/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function (nums1, nums2, queries) {
  const n = nums1.length
  const tree = new Array(4 * n).fill(0)
  const lazy = new Array(4 * n).fill(false)

  function build(o, l, r) {
    if (l === r) { tree[o] = nums1[l]; return }
    const m = (l + r) >> 1
    build(2 * o, l, m)
    build(2 * o + 1, m + 1, r)
    tree[o] = tree[2 * o] + tree[2 * o + 1]
  }

  function pushDown(o, l, r) {
    if (lazy[o]) {
      const m = (l + r) >> 1
      tree[2 * o] = (m - l + 1) - tree[2 * o]
      tree[2 * o + 1] = (r - m) - tree[2 * o + 1]
      lazy[2 * o] = !lazy[2 * o]
      lazy[2 * o + 1] = !lazy[2 * o + 1]
      lazy[o] = false
    }
  }

  function update(o, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      tree[o] = (r - l + 1) - tree[o]
      lazy[o] = !lazy[o]
      return
    }
    pushDown(o, l, r)
    const m = (l + r) >> 1
    if (ql <= m) update(2 * o, l, m, ql, qr)
    if (qr > m) update(2 * o + 1, m + 1, r, ql, qr)
    tree[o] = tree[2 * o] + tree[2 * o + 1]
  }

  build(1, 0, n - 1)
  let sum2 = 0
  for (const v of nums2) sum2 += v

  const ans = []
  for (const [type, l, r] of queries) {
    if (type === 1) {
      update(1, 0, n - 1, l, r)
    } else if (type === 2) {
      sum2 += tree[1] * l
    } else {
      ans.push(sum2)
    }
  }
  return ans
}
