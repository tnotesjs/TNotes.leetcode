/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
  // 求最小 v0 使得 v0^2 % k == 0
  let v0 = 1,
    temp = k
  for (let p = 2; p * p <= temp; p++) {
    let e = 0
    while (temp % p === 0) {
      temp /= p
      e++
    }
    for (let i = 0; i < Math.ceil(e / 2); i++) v0 *= p
  }
  if (temp > 1) v0 *= temp

  const mod = 2 * v0
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const map = new Map()
  map.set('0,0', 1)

  let diff = 0,
    count = 0
  for (let i = 0; i < s.length; i++) {
    diff += vowels.has(s[i]) ? 1 : -1
    const key = diff + ',' + ((i + 1) % mod)
    const prev = map.get(key) || 0
    count += prev
    map.set(key, prev + 1)
  }
  return count
}
