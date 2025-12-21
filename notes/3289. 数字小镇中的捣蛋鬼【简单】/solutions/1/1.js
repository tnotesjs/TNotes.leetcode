/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const seen = new Set()
  const res = []

  for (const num of nums) {
    if (seen.has(num)) {
      res.push(num)
      if (res.length === 2) break
    }
    seen.add(num)
  }

  return res
}
