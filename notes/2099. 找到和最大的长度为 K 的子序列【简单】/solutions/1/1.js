/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // 创建索引数组并按对应值降序排序
  const indices = nums.map((_, index) => index)
  indices.sort((a, b) => nums[b] - nums[a])

  // 取前k个最大值的索引
  const topKIndices = indices.slice(0, k)

  // 按原数组中的顺序排序索引
  topKIndices.sort((a, b) => a - b)

  // 根据索引构建结果数组
  return topKIndices.map((index) => nums[index])
}
