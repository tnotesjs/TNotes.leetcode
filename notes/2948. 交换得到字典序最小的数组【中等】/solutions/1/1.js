/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length
  const order = Array.from({ length: n }, (_, i) => i)
  order.sort((a, b) => nums[a] - nums[b])

  const res = new Array(n)
  let i = 0
  while (i < n) {
    let j = i + 1
    while (j < n && nums[order[j]] - nums[order[j - 1]] <= limit) j++
    // 同一组：按原始下标排序后填入排序值
    const group = order.slice(i, j)
    const sortedIdx = [...group].sort((a, b) => a - b)
    const sortedVal = group.map((idx) => nums[idx])
    for (let k = 0; k < sortedIdx.length; k++) {
      res[sortedIdx[k]] = sortedVal[k]
    }
    i = j
  }
  return res
}
