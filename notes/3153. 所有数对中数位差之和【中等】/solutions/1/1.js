/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
  const n = nums.length
  if (n <= 1) return 0
  // 所有数字位数相同
  const s = nums.map(String)
  const len = s[0].length
  let total = 0
  for (let d = 0; d < len; d++) {
    // 统计第 d 位上每个数字的出现次数
    const count = new Array(10).fill(0)
    for (let i = 0; i < n; i++) {
      count[parseInt(s[i][d])]++
    }
    // 不同的对数 = C(n,2) - 相同的对数
    let same = 0
    for (let k = 0; k < 10; k++) {
      same += count[k] * (count[k] - 1) / 2
    }
    total += n * (n - 1) / 2 - same
  }
  return total
}
