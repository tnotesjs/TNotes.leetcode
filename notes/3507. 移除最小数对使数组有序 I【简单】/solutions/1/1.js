/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let arr = [...nums]
  let count = 0

  // 检查数组是否非递减
  const isNonDecreasing = (a) => {
    for (let i = 1; i < a.length; i++) {
      if (a[i] < a[i - 1]) return false
    }
    return true
  }

  while (!isNonDecreasing(arr) && arr.length > 1) {
    // 找到和最小的相邻元素对（最左边的）
    let minSum = Infinity
    let minIdx = 0
    for (let i = 0; i < arr.length - 1; i++) {
      const sum = arr[i] + arr[i + 1]
      if (sum < minSum) {
        minSum = sum
        minIdx = i
      }
    }

    // 用它们的和替换这对元素
    arr.splice(minIdx, 2, minSum)
    count++
  }

  return count
}
