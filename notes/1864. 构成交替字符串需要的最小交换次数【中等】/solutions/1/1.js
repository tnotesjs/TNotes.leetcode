/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const n = s.length
  const ones = s.split('').filter((c) => c === '1').length
  const zeros = n - ones
  if (Math.abs(ones - zeros) > 1) return -1

  const countMismatch = (startWith) => {
    let mis = 0
    for (let i = 0; i < n; i++) {
      const expected = i % 2 === 0 ? startWith : startWith === '0' ? '1' : '0'
      if (s[i] !== expected) mis++
    }
    return mis / 2
  }

  if (ones > zeros) return countMismatch('1')
  if (zeros > ones) return countMismatch('0')
  return Math.min(countMismatch('0'), countMismatch('1'))
}
