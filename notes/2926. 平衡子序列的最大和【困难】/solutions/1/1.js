/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubsequenceSum = function(nums) {
  const n = nums.length
  const b = new Array(n)
  for (let i = 0; i < n; i++) b[i] = nums[i] - i
  const sorted = [...new Set(b)].sort((a, b) => a - b)
  const rank = new Map()
  for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i)
  const m = sorted.length
  const tree = new Array(4 * m).fill(-Infinity)
  function update(node, lo, hi, pos, val) {
    if (lo === hi) { tree[node] = Math.max(tree[node], val); return }
    const mid = (lo + hi) >> 1
    if (pos <= mid) update(2 * node, lo, mid, pos, val)
    else update(2 * node + 1, mid + 1, hi, pos, val)
    tree[node] = Math.max(tree[2 * node], tree[2 * node + 1])
  }
  function query(node, lo, hi, l, r) {
    if (l > r || lo > r || hi < l) return -Infinity
    if (l <= lo && hi <= r) return tree[node]
    const mid = (lo + hi) >> 1
    return Math.max(query(2 * node, lo, mid, l, r), query(2 * node + 1, mid + 1, hi, l, r))
  }
  let ans = -Infinity
  for (let i = 0; i < n; i++) {
    const r = rank.get(b[i])
    const best = query(1, 0, m - 1, 0, r)
    const dp = nums[i] + (best > 0 ? best : 0)
    update(1, 0, m - 1, r, dp)
    ans = Math.max(ans, dp)
  }
  return ans
}
