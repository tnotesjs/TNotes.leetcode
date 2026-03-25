/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const foodSet = new Set()
  const tableMap = new Map()
  for (const [, table, food] of orders) {
    foodSet.add(food)
    const t = Number(table)
    if (!tableMap.has(t)) tableMap.set(t, new Map())
    const m = tableMap.get(t)
    m.set(food, (m.get(food) || 0) + 1)
  }
  const foods = [...foodSet].sort()
  const tables = [...tableMap.keys()].sort((a, b) => a - b)
  const res = [['Table', ...foods]]
  for (const t of tables) {
    const m = tableMap.get(t)
    const row = [String(t)]
    for (const f of foods) row.push(String(m.get(f) || 0))
    res.push(row)
  }
  return res
}
