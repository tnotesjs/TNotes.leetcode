/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const s = String(num)
  let ans = 0

  for (let i = 0; i + k <= s.length; i += 1) {
    const val = Number(s.slice(i, i + k))
    if (val !== 0 && num % val === 0) ans += 1 // 满足整除条件则计数
  }

  return ans
}
