/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  return queries.filter(q => {
    return dictionary.some(d => {
      if (q.length !== d.length) return false
      let diff = 0
      for (let i = 0; i < q.length; i++) {
        if (q[i] !== d[i]) diff++
        if (diff > 2) return false
      }
      return true
    })
  })
}
