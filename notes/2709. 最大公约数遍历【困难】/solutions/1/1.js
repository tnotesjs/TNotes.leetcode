var canTraverseAllPairs = function (nums) {
  const n = nums.length
  if (n === 1) return true
  const N = n + 100001
  const parent = new Array(N)
  const rank = new Array(N).fill(0)
  for (let i = 0; i < N; i++) parent[i] = i

  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }

  function union(x, y) {
    const px = find(x),
      py = find(y)
    if (px === py) return
    if (rank[px] < rank[py]) parent[px] = py
    else if (rank[px] > rank[py]) parent[py] = px
    else {
      parent[py] = px
      rank[px]++
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) return false
    let x = nums[i]
    for (let p = 2; p * p <= x; p++) {
      if (x % p === 0) {
        union(i, n + p)
        while (x % p === 0) x = Math.floor(x / p)
      }
    }
    if (x > 1) union(i, n + x)
  }

  const root = find(0)
  for (let i = 1; i < n; i++) {
    if (find(i) !== root) return false
  }
  return true
}
