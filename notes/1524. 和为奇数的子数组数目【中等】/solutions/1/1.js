/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7
  let res = 0,
    odd = 0,
    even = 1 // even 初始为 1 代表空前缀
  let prefixSum = 0
  for (const x of arr) {
    prefixSum += x
    if (prefixSum % 2 === 1) {
      res = (res + even) % MOD
      odd++
    } else {
      res = (res + odd) % MOD
      even++
    }
  }
  return res
}
