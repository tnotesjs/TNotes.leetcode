/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
  // 计算数位乘积
  const digitProduct = (num) => {
    let product = 1
    while (num > 0) {
      product *= num % 10
      num = Math.floor(num / 10)
    }
    return product
  }

  // 从 n 开始枚举，找到第一个满足条件的数
  while (digitProduct(n) % t !== 0) {
    n++
  }

  return n
}
