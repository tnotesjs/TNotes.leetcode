/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b)

  let count = 0

  for (const x of arr1) {
    const pos = lowerBound(arr2, x)
    const leftOk = pos - 1 >= 0 ? Math.abs(x - arr2[pos - 1]) > d : true
    const rightOk = pos < arr2.length ? Math.abs(x - arr2[pos]) > d : true
    if (leftOk && rightOk) count++
  }

  return count
}

// 返回第一个 >= target 的下标
function lowerBound(nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    const m = (l + r) >> 1
    if (nums[m] < target) l = m + 1
    else r = m
  }
  return l
}
