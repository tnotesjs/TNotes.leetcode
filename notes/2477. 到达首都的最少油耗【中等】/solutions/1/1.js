/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const n = roads.length + 1
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of roads) {
    g[u].push(v)
    g[v].push(u)
  }

  let fuel = 0
  const dfs = (u, parent) => {
    let people = 1
    for (const v of g[u]) {
      if (v !== parent) {
        people += dfs(v, u)
      }
    }
    if (u !== 0) {
      fuel += Math.ceil(people / seats)
    }
    return people
  }
  dfs(0, -1)
  return fuel
}
