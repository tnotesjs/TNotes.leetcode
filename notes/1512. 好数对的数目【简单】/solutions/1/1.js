/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const cnt = new Array(101).fill(0)
  let res = 0

  for (const x of nums) {
    cnt[x] += 1
  }

  for (const c of cnt) {
    if (c > 1) res += (c * (c - 1)) / 2
  }

  return res
}
