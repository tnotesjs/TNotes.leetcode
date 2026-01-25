/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let count = 0
  for (let i = 0; i < arr.length - m; i++) {
    // 比较当前元素与 m 个位置后的元素
    if (arr[i] === arr[i + m]) {
      count++
      // 如果连续匹配了 m*(k-1) 次，说明找到了模式
      if (count >= m * (k - 1)) {
        return true
      }
    } else {
      // 若 arr[i] === arr[i+m] 不成立，则 arr[i] 不可能出现在任何有效的模式串中
      // 此时 0-i 都已经扫描过了，继续向后检查即可
      count = 0 // 重置计数器
    }
  }
  return false
}
