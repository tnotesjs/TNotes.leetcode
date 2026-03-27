/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
var minimumCost = function (nums, k, dist) {
  const n = nums.length
  const need = k - 1

  // 坐标压缩
  const sorted = [...new Set(nums.slice(1))].sort((a, b) => a - b)
  const rank = new Map()
  sorted.forEach((v, i) => rank.set(v, i + 1))
  const m = sorted.length

  // 树状数组：维护计数和求和
  const cnt = new Array(m + 1).fill(0)
  const sum = new Array(m + 1).fill(0)

  const update = (i, dc, ds) => {
    for (; i <= m; i += i & -i) {
      cnt[i] += dc
      sum[i] += ds
    }
  }
  const qCnt = (i) => {
    let s = 0
    for (; i > 0; i -= i & -i) s += cnt[i]
    return s
  }
  const qSum = (i) => {
    let s = 0
    for (; i > 0; i -= i & -i) s += sum[i]
    return s
  }

  // 查询最小的 need 个元素之和
  const getTopSum = () => {
    let lo = 1,
      hi = m,
      pos = m
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (qCnt(mid) >= need) {
        pos = mid
        hi = mid - 1
      } else lo = mid + 1
    }
    const c = qCnt(pos),
      s = qSum(pos)
    return s - (c - need) * sorted[pos - 1]
  }

  let ans = Infinity,
    left = 1

  for (let right = 1; right < n; right++) {
    update(rank.get(nums[right]), 1, nums[right])
    while (right - left > dist) {
      update(rank.get(nums[left]), -1, -nums[left])
      left++
    }
    if (right - left + 1 >= need) {
      ans = Math.min(ans, getTopSum())
    }
  }

  return nums[0] + ans
}
