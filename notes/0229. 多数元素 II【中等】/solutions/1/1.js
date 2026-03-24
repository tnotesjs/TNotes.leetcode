/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let c1 = 0,
    c2 = 0,
    cnt1 = 0,
    cnt2 = 0
  for (const num of nums) {
    if (cnt1 > 0 && num === c1) cnt1++
    else if (cnt2 > 0 && num === c2) cnt2++
    else if (cnt1 === 0) {
      c1 = num
      cnt1 = 1
    } else if (cnt2 === 0) {
      c2 = num
      cnt2 = 1
    } else {
      cnt1--
      cnt2--
    }
  }
  // 验证
  cnt1 = 0
  cnt2 = 0
  for (const num of nums) {
    if (num === c1) cnt1++
    else if (num === c2) cnt2++
  }
  const res = []
  if (cnt1 > nums.length / 3) res.push(c1)
  if (cnt2 > nums.length / 3) res.push(c2)
  return res
}
