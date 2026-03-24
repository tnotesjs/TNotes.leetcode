/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const max = Math.max(...nums)
  const sum = new Array(max + 1).fill(0)
  for (const n of nums) sum[n] += n
  let prev = 0,
    curr = sum[0]
  for (let i = 1; i <= max; i++) {
    const tmp = curr
    curr = Math.max(curr, prev + sum[i])
    prev = tmp
  }
  return curr
}
