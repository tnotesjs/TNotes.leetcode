/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function (queries, intLength) {
  const half = Math.ceil(intLength / 2)
  const start = Math.pow(10, half - 1)
  const limit = Math.pow(10, half) - start
  return queries.map((q) => {
    if (q > limit) return -1
    const firstHalf = (start + q - 1).toString()
    const secondHalf = firstHalf.split('').reverse().join('')
    if (intLength % 2 === 0) {
      return Number(firstHalf + secondHalf)
    } else {
      return Number(firstHalf + secondHalf.slice(1))
    }
  })
}
