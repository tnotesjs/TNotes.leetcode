/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function (nums) {
  const n = nums.length
  let res = 0
  for (let i = 0; i < n; i++) {
    const seen = new Set()
    let cnt = 0
    for (let j = i; j < n; j++) {
      const v = nums[j]
      if (seen.has(v)) {
        // 不变
      } else if (seen.has(v - 1) && seen.has(v + 1)) {
        cnt-- // 填充了一个间隙
      } else if (!seen.has(v - 1) && !seen.has(v + 1)) {
        if (seen.size > 0) cnt++ // 新增一个间隙
      }
      // 恰好有一个邻居时 cnt 不变
      seen.add(v)
      res += cnt
    }
  }
  return res
}
