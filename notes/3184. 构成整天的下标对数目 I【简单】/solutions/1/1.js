/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let count = 0
  const n = hours.length
  // 枚举所有 i < j 的下标对
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 判断两数之和是否为 24 的倍数
      if ((hours[i] + hours[j]) % 24 === 0) {
        count++
      }
    }
  }
  return count
}
