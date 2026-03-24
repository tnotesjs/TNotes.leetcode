/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  const memo = new Map()
  const dfs = (needs) => {
    const key = needs.join(',')
    if (memo.has(key)) return memo.get(key)
    let min = needs.reduce((s, n, i) => s + n * price[i], 0)
    for (const sp of special) {
      const next = [...needs]
      let valid = true
      for (let i = 0; i < needs.length; i++) {
        next[i] -= sp[i]
        if (next[i] < 0) {
          valid = false
          break
        }
      }
      if (valid) min = Math.min(min, sp[needs.length] + dfs(next))
    }
    memo.set(key, min)
    return min
  }
  return dfs(needs)
}
