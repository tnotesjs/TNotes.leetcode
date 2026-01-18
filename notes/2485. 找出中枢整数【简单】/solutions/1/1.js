/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  // 根据等差数列求和公式推导：
  // sum(1 to x) = sum(x to n)
  // x*(x+1)/2 = n*(n+1)/2 - (x-1)*x/2
  // 化简得：x^2 = n*(n+1)/2
  const target = (n * (n + 1)) / 2
  const x = Math.sqrt(target)

  // 判断 x 是否为整数
  return x === Math.floor(x) ? x : -1
}
