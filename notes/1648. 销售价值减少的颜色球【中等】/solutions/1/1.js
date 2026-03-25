/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
  const MOD = 1e9 + 7
  inventory.sort((a, b) => b - a)
  inventory.push(0)
  let res = 0n,
    n = inventory.length
  const mod = BigInt(MOD)
  for (let i = 0; i < n - 1; i++) {
    const width = BigInt(i + 1)
    const diff = BigInt(inventory[i] - inventory[i + 1])
    const total = width * diff
    if (BigInt(orders) <= total) {
      const q = BigInt(Math.floor(orders / Number(width)))
      const r = BigInt(orders % Number(width))
      const high = BigInt(inventory[i])
      const low = high - q + 1n
      res =
        (res +
          ((((((((high + low) % mod) * q) % mod) * width) % mod) * 500000004n) %
            mod)) %
        mod
      res = (res + ((high - q) % mod) * r) % mod
      return Number(((res % mod) + mod) % mod)
    }
    orders -= Number(total)
    const high = BigInt(inventory[i])
    const low = BigInt(inventory[i + 1] + 1)
    res =
      (res +
        ((((((((high + low) % mod) * diff) % mod) * width) % mod) *
          500000004n) %
          mod)) %
      mod
  }
  return Number(((res % mod) + mod) % mod)
}
