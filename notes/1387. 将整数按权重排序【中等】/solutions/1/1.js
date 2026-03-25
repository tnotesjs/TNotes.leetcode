/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const weight = (x) => {
    let steps = 0
    while (x !== 1) {
      x = x % 2 === 0 ? x / 2 : 3 * x + 1
      steps++
    }
    return steps
  }

  const arr = []
  for (let i = lo; i <= hi; i++) arr.push(i)
  arr.sort((a, b) => weight(a) - weight(b) || a - b)
  return arr[k - 1]
}
