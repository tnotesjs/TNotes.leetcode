var count = function (num1, num2, min_sum, max_sum) {
  const MOD = 1e9 + 7

  function calc(num) {
    const digits = num.split('').map(Number)
    const n = digits.length
    const memo = new Map()

    function dp(pos, sum, tight) {
      if (sum > max_sum) return 0
      if (pos === n) return sum >= min_sum ? 1 : 0
      const key = pos * 401 * 2 + sum * 2 + (tight ? 1 : 0)
      if (memo.has(key)) return memo.get(key)
      const limit = tight ? digits[pos] : 9
      let res = 0
      for (let d = 0; d <= limit; d++) {
        res = (res + dp(pos + 1, sum + d, tight && d === limit)) % MOD
      }
      memo.set(key, res)
      return res
    }

    return dp(0, 0, true)
  }

  function subtract1(s) {
    const arr = s.split('')
    let i = arr.length - 1
    while (i >= 0 && arr[i] === '0') {
      arr[i] = '9'
      i--
    }
    if (i >= 0) arr[i] = String(Number(arr[i]) - 1)
    let start = 0
    while (start < arr.length - 1 && arr[start] === '0') start++
    return arr.slice(start).join('')
  }

  return (calc(num2) - calc(subtract1(num1)) + MOD) % MOD
}
