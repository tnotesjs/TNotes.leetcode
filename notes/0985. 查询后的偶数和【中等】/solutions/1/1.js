/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  // 初始化偶数和
  let evenSum = 0
  for (const num of nums) {
    if (num % 2 === 0) {
      evenSum += num
    }
  }

  const result = []

  for (const [val, index] of queries) {
    const oldVal = nums[index]
    const newVal = oldVal + val

    // 如果原值是偶数，先从偶数和中减去
    if (oldVal % 2 === 0) {
      evenSum -= oldVal
    }

    // 更新数组值
    nums[index] = newVal

    // 如果新值是偶数，加到偶数和中
    if (newVal % 2 === 0) {
      evenSum += newVal
    }

    result.push(evenSum)
  }

  return result
}
