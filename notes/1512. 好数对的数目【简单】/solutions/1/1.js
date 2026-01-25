/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const cnt = new Array(101).fill(0)
  let res = 0

  // 统计每个值出现次数 cnt
  for (const x of nums) cnt[x] += 1

  // 统计组合数
  for (const c of cnt) {
    if (c > 1) res += (c * (c - 1)) / 2
  }

  return res
}
