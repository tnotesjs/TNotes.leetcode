/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map()
  for (const e of employees) map.set(e.id, e)
  const dfs = (eid) => {
    const e = map.get(eid)
    let total = e.importance
    for (const sub of e.subordinates) total += dfs(sub)
    return total
  }
  return dfs(id)
}
