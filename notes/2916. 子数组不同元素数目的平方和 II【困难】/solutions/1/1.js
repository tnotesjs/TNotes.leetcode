/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  const MOD = 1000000007n
  const n = nums.length
  const size = 4 * n
  const sumD = new BigInt64Array(size)
  const sumD2 = new BigInt64Array(size)
  const lazy = new BigInt64Array(size)
  const cnt = new Int32Array(size)

  function build(node, l, r) {
    cnt[node] = r - l + 1
    if (l === r) return
    const mid = (l + r) >> 1
    build(2 * node, l, mid)
    build(2 * node + 1, mid + 1, r)
  }

  function pushDown(node) {
    if (lazy[node] !== 0n) {
      const val = lazy[node]
      for (const child of [2 * node, 2 * node + 1]) {
        const c = BigInt(cnt[child])
        sumD2[child] = (sumD2[child] + 2n * val % MOD * sumD[child] % MOD + val * val % MOD * c % MOD) % MOD
        sumD[child] = (sumD[child] + val * c % MOD) % MOD
        lazy[child] = (lazy[child] + val) % MOD
      }
      lazy[node] = 0n
    }
  }

  function update(node, l, r, ql, qr) {
    if (ql > r || qr < l) return
    if (ql <= l && r <= qr) {
      const c = BigInt(cnt[node])
      sumD2[node] = (sumD2[node] + 2n * sumD[node] % MOD + c) % MOD
      sumD[node] = (sumD[node] + c) % MOD
      lazy[node] = (lazy[node] + 1n) % MOD
      return
    }
    pushDown(node)
    const mid = (l + r) >> 1
    update(2 * node, l, mid, ql, qr)
    update(2 * node + 1, mid + 1, r, ql, qr)
    sumD[node] = (sumD[2 * node] + sumD[2 * node + 1]) % MOD
    sumD2[node] = (sumD2[2 * node] + sumD2[2 * node + 1]) % MOD
  }

  function query(node, l, r, ql, qr) {
    if (ql > r || qr < l) return 0n
    if (ql <= l && r <= qr) return sumD2[node]
    pushDown(node)
    const mid = (l + r) >> 1
    return (query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid + 1, r, ql, qr)) % MOD
  }

  build(1, 0, n - 1)
  const prev = new Map()
  let ans = 0n

  for (let i = 0; i < n; i++) {
    const p = prev.has(nums[i]) ? prev.get(nums[i]) + 1 : 0
    update(1, 0, n - 1, p, i)
    prev.set(nums[i], i)
    ans = (ans + query(1, 0, n - 1, 0, i)) % MOD
  }

  return Number(ans)
}
