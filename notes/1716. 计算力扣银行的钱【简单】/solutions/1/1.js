/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const weeks = Math.floor(n / 7)
  const rem = n % 7

  // 整周求和：每周起始金额递增，和为 (7/2) * weeks * (weeks + 7)
  const fullWeeksSum = (7 * weeks * (weeks + 7)) / 2

  // 剩余天数形成以 (1 + weeks) 开头的等差数列，长度 rem，和为 rem * (2 * weeks + rem + 1) / 2
  const remSum = (rem * (2 * weeks + rem + 1)) / 2

  return fullWeeksSum + remSum
}
