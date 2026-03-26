/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const n = nums.length
  // 统计偶数位和奇数位的频率
  const evenFreq = new Map(),
    oddFreq = new Map()
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) evenFreq.set(nums[i], (evenFreq.get(nums[i]) || 0) + 1)
    else oddFreq.set(nums[i], (oddFreq.get(nums[i]) || 0) + 1)
  }
  // 获取前两名
  const getTop2 = (freq) => {
    const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1])
    const res = [
      [-1, 0],
      [-1, 0],
    ]
    if (sorted.length > 0) res[0] = sorted[0]
    if (sorted.length > 1) res[1] = sorted[1]
    return res
  }
  const evenTop = getTop2(evenFreq)
  const oddTop = getTop2(oddFreq)
  const evenCount = Math.ceil(n / 2)
  const oddCount = Math.floor(n / 2)
  // 如果前两名不同
  if (evenTop[0][0] !== oddTop[0][0]) {
    return evenCount - evenTop[0][1] + (oddCount - oddTop[0][1])
  }
  // 相同时，取两种组合的最小值
  return Math.min(
    evenCount - evenTop[0][1] + (oddCount - oddTop[1][1]),
    evenCount - evenTop[1][1] + (oddCount - oddTop[0][1]),
  )
}
