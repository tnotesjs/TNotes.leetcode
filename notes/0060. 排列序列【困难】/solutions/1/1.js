/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const numbers = []
  const factorial = Array(n + 1).fill(1)

  for (let i = 1; i <= n; i++) {
    numbers.push(String(i))
    factorial[i] = factorial[i - 1] * i
  }

  let rank = k - 1
  let result = ''

  for (let remaining = n; remaining >= 1; remaining--) {
    const groupSize = factorial[remaining - 1]
    const index = Math.floor(rank / groupSize)

    result += numbers[index]
    numbers.splice(index, 1)
    rank %= groupSize
  }

  return result
}
