/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 统计数组 nums 的区间 [start, end] 中，num 出现的次数。
  const countInRange = (start, end, num) => {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (nums[i] === num) count++
    }
    return count
  }

  // 获取数组 nums 的区间 [start, end] 中的众数。
  const majorityElementRec = (start, end) => {
    if (start === end) return nums[start]

    // 细分区间，找众数
    let mid = start + Math.floor((end - start) / 2)
    const l_majority = majorityElementRec(start, mid) // 左侧子区间的众数
    const r_majority = majorityElementRec(mid + 1, end) // 右侧子区间的众数
    if (l_majority === r_majority) return l_majority

    // 合并区间，找众数
    const l_count = countInRange(start, end, l_majority)
    const r_count = countInRange(start, end, r_majority)
    return l_count > r_count ? l_majority : r_majority
  }

  return majorityElementRec(0, nums.length - 1)
}
