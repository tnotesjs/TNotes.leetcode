var sumDistance = function (nums, s, d) {
  const MOD = 1000000007n
  const n = nums.length
  const pos = new Array(n)
  for (let i = 0; i < n; i++) {
    pos[i] = BigInt(nums[i]) + (s[i] === 'R' ? BigInt(d) : -BigInt(d))
  }
  pos.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
  let res = 0n,
    prefix = 0n
  for (let i = 0; i < n; i++) {
    res = (res + BigInt(i) * pos[i] - prefix) % MOD
    prefix += pos[i]
  }
  return Number(((res % MOD) + MOD) % MOD)
}
