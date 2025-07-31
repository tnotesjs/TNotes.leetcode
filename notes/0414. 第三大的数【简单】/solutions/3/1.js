/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const topThree = []

  for (const num of nums) {
    if (topThree.includes(num)) {
      continue
    }

    topThree.push(num)
    topThree.sort((a, b) => b - a)

    // 保持数组长度为3
    if (topThree.length > 3) {
      topThree.pop()
    }
  }

  // 如果有 3 个数，返回最小的（第三大）；否则返回最大的
  return topThree.length === 3 ? topThree[2] : topThree[0]
}
