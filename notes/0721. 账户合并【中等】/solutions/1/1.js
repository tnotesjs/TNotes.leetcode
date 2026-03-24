/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const parent = new Map()
  const find = (x) => {
    if (!parent.has(x)) parent.set(x, x)
    while (parent.get(x) !== x) {
      parent.set(x, parent.get(parent.get(x)))
      x = parent.get(x)
    }
    return x
  }
  const union = (a, b) => parent.set(find(a), find(b))

  const emailToName = new Map()
  for (const acc of accounts) {
    const name = acc[0]
    for (let i = 1; i < acc.length; i++) {
      emailToName.set(acc[i], name)
      union(acc[1], acc[i])
    }
  }

  const groups = new Map()
  for (const email of emailToName.keys()) {
    const root = find(email)
    if (!groups.has(root)) groups.set(root, [])
    groups.get(root).push(email)
  }

  const res = []
  for (const [root, emails] of groups) {
    emails.sort()
    res.push([emailToName.get(root), ...emails])
  }
  return res
}
