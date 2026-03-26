/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function (nums) {
  const n = nums.length
  const indices = Array.from({ length: n }, (_, i) => i)
  indices.sort((a, b) => nums[a] - nums[b])

  // BIT
  const bit = new Array(n + 2).fill(0)
  function update(i, val) {
    for (i += 1; i <= n; i += i & -i) bit[i] += val
  }
  function query(i) {
    let s = 0
    for (i += 1; i > 0; i -= i & -i) s += bit[i]
    return s
  }
  function rangeQuery(l, r) {
    if (l > r) return 0
    return query(r) - (l > 0 ? query(l - 1) : 0)
  }

  for (let i = 0; i < n; i++) update(i, 1)

  let ops = n
  let prev = -1
  for (let k = 0; k < n; k++) {
    const cur = indices[k]
    if (prev === -1) {
      ops += cur
    } else if (cur > prev) {
      ops += rangeQuery(prev + 1, cur - 1)
    } else {
      ops += rangeQuery(prev + 1, n - 1) + rangeQuery(0, cur - 1)
    }
    update(cur, -1)
    prev = cur
  }
  return ops
}
