var maxFrequencyScore = function (nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]
  let lo = 1,
    hi = n,
    ans = 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (check(nums, prefix, n, mid, k)) {
      ans = mid
      lo = mid + 1
    } else hi = mid - 1
  }
  return ans
}

function check(nums, prefix, n, size, k) {
  for (let i = 0; i + size - 1 < n; i++) {
    const j = i + size - 1
    const m = i + ((size - 1) >> 1)
    const target = nums[m]
    const leftCost = target * (m - i + 1) - (prefix[m + 1] - prefix[i])
    const rightCost = prefix[j + 1] - prefix[m + 1] - target * (j - m)
    if (leftCost + rightCost <= k) return true
  }
  return false
}
