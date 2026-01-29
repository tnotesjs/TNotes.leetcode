/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const seen = new Set()

  for (const x of arr) {
    if (seen.has(2 * x) || (x % 2 === 0 && seen.has(x / 2))) return true
    seen.add(x)
  }

  return false
}
