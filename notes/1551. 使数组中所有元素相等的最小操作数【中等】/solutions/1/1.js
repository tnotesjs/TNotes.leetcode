/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  // arr[i] = 2*i+1, 目标值 = n
  // 总操作数 = sum of (n - arr[i]) for i < n/2
  return Math.floor((n * n) / 4)
}
