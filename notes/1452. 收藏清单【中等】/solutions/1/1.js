/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (favoriteCompanies) {
  const sets = favoriteCompanies.map((c) => new Set(c))
  const res = []
  for (let i = 0; i < sets.length; i++) {
    let isSubset = false
    for (let j = 0; j < sets.length; j++) {
      if (i === j || sets[j].size <= sets[i].size) continue
      if ([...sets[i]].every((c) => sets[j].has(c))) {
        isSubset = true
        break
      }
    }
    if (!isSubset) res.push(i)
  }
  return res
}
