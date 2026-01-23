/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let ans = 0

  while (n > 0) {
    ans += n % k // 取 k 进制下的最后一位数字加入总和
    n = Math.floor(n / k) // 去掉 k 进制下的最后一位数字
  }

  return ans
}
