/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  const res = []
  for (const [k, trim] of queries) {
    const trimmed = nums.map((s, i) => [s.slice(s.length - trim), i])
    trimmed.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] - b[1]))
    res.push(trimmed[k - 1][1])
  }
  return res
}
