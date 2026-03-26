var minimumCost = function (nums) {
  nums.sort((a, b) => a - b)
  const pals = generatePalindromes()
  const median = nums[nums.length >> 1]
  let lo = 0,
    hi = pals.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (pals[mid] < median) lo = mid + 1
    else hi = mid
  }
  let ans = Infinity
  for (
    let i = Math.max(0, lo - 1);
    i <= Math.min(pals.length - 1, lo + 1);
    i++
  ) {
    let cost = 0
    for (const x of nums) cost += Math.abs(x - pals[i])
    ans = Math.min(ans, cost)
  }
  return ans
}

function generatePalindromes() {
  const pals = []
  for (let len = 1; len <= 10; len++) {
    const half = Math.ceil(len / 2)
    const start = half === 1 ? 1 : 10 ** (half - 1)
    for (let i = start; i < 10 ** half; i++) {
      const s = String(i)
      const rev = s.split('').reverse().join('')
      const pal = Number(len % 2 ? s + rev.slice(1) : s + rev)
      if (pal > 1e9) break
      pals.push(pal)
    }
  }
  pals.sort((a, b) => a - b)
  return pals
}
