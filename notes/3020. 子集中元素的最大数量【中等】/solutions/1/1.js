/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  const cnt = new Map()
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) || 0) + 1)
  }
  // 特殊处理 1：序列全为 1
  let ans = 1
  if (cnt.has(1)) {
    const c = cnt.get(1)
    ans = c % 2 === 1 ? c : c - 1
  }
  // 枚举底数 x >= 2
  for (const x of cnt.keys()) {
    if (x === 1) continue
    let cur = x
    let len = 0
    while (cnt.has(cur) && cnt.get(cur) >= 2) {
      len += 2
      cur = cur * cur
    }
    if (cnt.has(cur)) {
      len += 1
    } else {
      len -= 1
    }
    ans = Math.max(ans, len)
  }
  return ans
}
