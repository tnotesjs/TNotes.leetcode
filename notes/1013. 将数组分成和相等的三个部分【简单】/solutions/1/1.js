/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // 计算数组总和
  const totalSum = arr.reduce((sum, num) => sum + num, 0)

  // 如果总和不能被 3 整除，无法分成三等分，直接返回 false
  if (totalSum % 3 !== 0) {
    return false
  }

  const targetSum = totalSum / 3
  let currentSum = 0
  let count = 0 // 和为 targetSum 的连续片段（子数组）的个数

  // 遍历数组，寻找和为 targetSum 的子数组个数
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    // 如果当前累计和等于目标和
    if (currentSum === targetSum) {
      if (++count === 3) return true
      // 或者：
      // if (++count === 2 && i !== arr.length - 1) return true
      currentSum = 0 // 重置累计和，开始寻找下一个部分
    }
  }

  return false
}

/* 
提交时间：2026.01.05
执行用时分布 0 ms 击败 100.00%
消耗内存分布 57.88 MB 击败 100.00%
*/
