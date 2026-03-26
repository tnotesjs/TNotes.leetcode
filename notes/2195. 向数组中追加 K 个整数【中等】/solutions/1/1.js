/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
  nums.sort((a, b) => a - b)
  const unique = [...new Set(nums)]
  let sum = (BigInt(k) * BigInt(k + 1)) / 2n
  let top = k
  for (const num of unique) {
    if (num <= top) {
      top++
      sum += BigInt(top) - BigInt(num)
    }
  }
  return Number(sum)
}
