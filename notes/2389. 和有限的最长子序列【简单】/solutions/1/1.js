/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // 排序数组，贪心选择最小的元素
  nums.sort((a, b) => a - b)

  // 计算前缀和
  const prefixSum = []
  let sum = 0
  for (const num of nums) {
    sum += num
    prefixSum.push(sum)
  }

  const answer = []
  for (const query of queries) {
    // 找到前缀和小于等于 query 的最大索引
    let count = 0
    for (let i = 0; i < prefixSum.length; i++) {
      if (prefixSum[i] <= query) {
        count = i + 1
      } else {
        break
      }
    }
    answer.push(count)
  }

  return answer
}
