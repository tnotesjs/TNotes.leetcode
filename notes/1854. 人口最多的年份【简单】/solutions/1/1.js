/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const base = 1950
  const diff = new Array(102).fill(0) // 1950-2050 inclusive needs 101 slots, keep one extra for diff end marker

  for (const [birth, death] of logs) {
    diff[birth - base] += 1
    diff[death - base] -= 1 // death year is excluded
  }

  let maxPop = 0
  let year = base
  let cur = 0

  for (let i = 0; i < 101; i += 1) {
    cur += diff[i]
    if (cur > maxPop) {
      maxPop = cur
      year = base + i
    }
  }

  return year
}
