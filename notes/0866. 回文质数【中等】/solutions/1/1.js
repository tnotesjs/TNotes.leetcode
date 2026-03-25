/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function (n) {
  if (n <= 2) return 2
  if (n <= 3) return 3
  if (n <= 5) return 5
  if (n <= 7) return 7
  if (n <= 11) return 11
  for (let len = 3; len <= 9; len += 2) {
    const half = Math.floor(len / 2) + 1
    const start = Math.pow(10, half - 1)
    const end = Math.pow(10, half)
    for (let h = start; h < end; h++) {
      const s = String(h)
      const pal = Number(s + s.slice(0, -1).split('').reverse().join(''))
      if (pal >= n && isPrime(pal)) return pal
    }
  }
  return -1
}

function isPrime(n) {
  if (n < 2) return false
  if (n < 4) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}
