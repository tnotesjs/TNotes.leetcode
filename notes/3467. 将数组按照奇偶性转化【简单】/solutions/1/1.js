/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  const n = nums.length
  let evenCount = 0

  // 统计偶数的个数
  for (const num of nums) {
    if (num % 2 === 0) evenCount++
  }

  // 构建结果数组：先放 evenCount 个 0，再放剩余的 1
  const result = new Array(n)
  for (let i = 0; i < n; i++) {
    result[i] = i < evenCount ? 0 : 1
  }

  return result
}
