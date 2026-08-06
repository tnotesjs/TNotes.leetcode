/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }

  let ans = Infinity
  for (let i = 0; i < n; i++) {
    // 找最小的 j ∈ [i+1, n]，使 prefix[j] - prefix[i] >= target
    const need = prefix[i] + target
    let lo = i + 1
    let hi = n
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (prefix[mid] >= need) hi = mid
      else lo = mid + 1
    }
    if (lo <= n && prefix[lo] >= need) {
      ans = Math.min(ans, lo - i)
    }
  }

  return ans === Infinity ? 0 : ans
}
