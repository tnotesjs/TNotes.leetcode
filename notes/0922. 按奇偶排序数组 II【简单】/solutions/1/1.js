/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let i = 0 // 偶索引
  let j = 1 // 奇索引
  const n = nums.length

  while (i < n && j < n) {
    const evenIdxOk = (nums[i] & 1) === 0
    const oddIdxOk = (nums[j] & 1) === 1

    if (!evenIdxOk && !oddIdxOk) {
      // 偶位是奇数、奇位是偶数，交换纠正
      const t = nums[i]
      nums[i] = nums[j]
      nums[j] = t
      i += 2
      j += 2
    } else {
      if (evenIdxOk) i += 2
      if (oddIdxOk) j += 2
    }
  }
  return nums
}
