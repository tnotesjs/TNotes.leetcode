/**
 * @param {string} s
 * @return {number}
 */
var numWays = function (s) {
  const MOD = 1e9 + 7
  const n = s.length
  let ones = 0
  for (const c of s) if (c === '1') ones++
  if (ones % 3 !== 0) return 0
  if (ones === 0)
    return Number(((BigInt(n - 1) * BigInt(n - 2)) / 2n) % BigInt(MOD))
  const target = ones / 3
  let cnt = 0,
    left1 = 0,
    left2 = 0,
    right1 = 0,
    right2 = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') cnt++
    if (cnt === target && !left1) left1 = i
    if (cnt === target + 1 && !left2) left2 = i
    if (cnt === 2 * target && !right1) right1 = i
    if (cnt === 2 * target + 1 && !right2) right2 = i
  }
  return Number((BigInt(left2 - left1) * BigInt(right2 - right1)) % BigInt(MOD))
}
