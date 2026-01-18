/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let prev = 0

  for (const num of arr) {
    // 计算前一个数和当前数之间的缺失数的个数
    const missing = num - prev - 1

    // 如果当前缺失个数足够包含第 k 个缺失数，就直接计算返回
    if (missing >= k) return prev + k

    // 如果不够，就消耗该区间（减少 k 的值），继续检查下一个区间
    k -= missing
    prev = num
  }

  return arr[arr.length - 1] + k
}
