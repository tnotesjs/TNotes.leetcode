/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  const MOD = 1e9 + 7
  const powers = []
  while (n) {
    const lb = n & (-n)
    powers.push(lb)
    n -= lb
  }
  const ans = []
  for (const [l, r] of queries) {
    let prod = 1n
    for (let i = l; i <= r; i++) {
      prod = prod * BigInt(powers[i]) % 1000000007n
    }
    ans.push(Number(prod))
  }
  return ans
}
