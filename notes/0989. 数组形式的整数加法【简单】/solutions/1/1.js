/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = []
  let i = num.length - 1
  let carry = 0

  while (i >= 0 || k > 0) {
    const x = i >= 0 ? num[i] : 0
    const y = k % 10
    const sum = x + y + carry
    res.push(sum % 10)
    carry = Math.floor(sum / 10)
    k = Math.floor(k / 10)
    i--
  }

  if (carry) res.push(carry)
  res.reverse()
  return res
}
