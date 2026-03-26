/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let res = 0,
    prev = 0
  for (const row of bank) {
    let count = 0
    for (const c of row) {
      if (c === '1') count++
    }
    if (count > 0) {
      res += prev * count
      prev = count
    }
  }
  return res
}
