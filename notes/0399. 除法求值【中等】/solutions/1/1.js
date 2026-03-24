/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const parent = new Map()
  const weight = new Map() // weight[x] = x / root(x)

  const find = (x) => {
    if (!parent.has(x)) {
      parent.set(x, x)
      weight.set(x, 1.0)
    }
    if (parent.get(x) !== x) {
      const root = find(parent.get(x))
      weight.set(x, weight.get(x) * weight.get(parent.get(x)))
      parent.set(x, root)
    }
    return parent.get(x)
  }

  const union = (a, b, val) => {
    const ra = find(a),
      rb = find(b)
    if (ra === rb) return
    parent.set(ra, rb)
    weight.set(ra, (val * weight.get(b)) / weight.get(a))
  }

  for (let i = 0; i < equations.length; i++) {
    union(equations[i][0], equations[i][1], values[i])
  }

  return queries.map(([a, b]) => {
    if (!parent.has(a) || !parent.has(b)) return -1.0
    if (find(a) !== find(b)) return -1.0
    return weight.get(a) / weight.get(b)
  })
}
