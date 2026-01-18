/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const n = nums.length
  const answer = []
  let leftSum = 0
  let totalSum = nums.reduce((sum, num) => sum + num, 0)

  for (let i = 0; i < n; i++) {
    // 当前位置的右侧和 = 总和 - 左侧和 - 当前元素
    const rightSum = totalSum - leftSum - nums[i]
    answer.push(Math.abs(leftSum - rightSum))
    // 更新左侧和
    leftSum += nums[i]
  }

  return answer
}
