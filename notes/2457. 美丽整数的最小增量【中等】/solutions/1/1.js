/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  let add = 0n
  let num = BigInt(n)
  const digitSum = (x) => {
    let s = 0n
    while (x > 0n) { s += x % 10n; x /= 10n }
    return s
  }
  let base = 1n
  while (digitSum(num) > BigInt(target)) {
    // 进位当前最低非零位
    let remainder = num % (base * 10n)
    let carry = base * 10n - remainder
    num += carry
    add += carry
    base *= 10n
  }
  return Number(add)
}
