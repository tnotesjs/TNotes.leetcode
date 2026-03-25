/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map()
  for (const cp of cpdomains) {
    const [cnt, domain] = cp.split(' ')
    const count = Number(cnt)
    const parts = domain.split('.')
    for (let i = 0; i < parts.length; i++) {
      const sub = parts.slice(i).join('.')
      map.set(sub, (map.get(sub) || 0) + count)
    }
  }
  const res = []
  for (const [domain, count] of map) res.push(`${count} ${domain}`)
  return res
}
