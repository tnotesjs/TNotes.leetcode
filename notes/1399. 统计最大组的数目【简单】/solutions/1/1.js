/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const cnt = new Map()

  const digitSum = (x) => {
    let s = 0
    while (x > 0) {
      s += x % 10
      x = Math.floor(x / 10)
    }
    return s
  }

  let maxSize = 0
  for (let i = 1; i <= n; i++) {
    const s = digitSum(i)
    const c = (cnt.get(s) || 0) + 1
    cnt.set(s, c)
    if (c > maxSize) maxSize = c
  }

  let groups = 0
  for (const v of cnt.values()) {
    if (v === maxSize) groups++
  }
  return groups
}
