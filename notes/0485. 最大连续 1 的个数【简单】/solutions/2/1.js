/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const newNums = nums
    .join('')
    .split('0')
    .filter((item) => item.length > 0) // ["11", "111"]
  let maxLen = 0
  for (let i = 0; i < newNums.length; i++) {
    let len = newNums[i].length
    maxLen = maxLen > len ? maxLen : len
  }
  return maxLen
}

// 其它写法：

// 使用 map 和展开运算符：
// var findMaxConsecutiveOnes = function (nums) {
//   const newNums = nums
//     .join('')
//     .split('0')
//     .filter((item) => item.length > 0) // ["11", "111"]
//   if (newNums.length === 0) return 0
//   return Math.max(...newNums.map((item) => item.length))
// }

// 使用正则：
// var findMaxConsecutiveOnes = function (nums) {
//   return Math.max(
//     ...nums
//       .join('')
//       .split(/0+/)
//       .map((item) => item.length)
//   )
// }
