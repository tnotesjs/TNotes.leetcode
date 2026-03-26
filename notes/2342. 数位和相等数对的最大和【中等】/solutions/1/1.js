/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const map = new Map()
  let res = -1
  const digitSum = (n) => {
    let s = 0
    while (n > 0) {
      s += n % 10
      n = Math.floor(n / 10)
    }
    return s
  }
  for (const num of nums) {
    const s = digitSum(num)
    if (map.has(s)) {
      res = Math.max(res, map.get(s) + num)
      if (num > map.get(s)) map.set(s, num)
    } else {
      map.set(s, num)
    }
  }
  return res
}
