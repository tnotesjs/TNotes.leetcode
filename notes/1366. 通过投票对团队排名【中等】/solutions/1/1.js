/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  const teams = votes[0].length
  const count = new Map()
  for (const ch of votes[0]) count.set(ch, new Array(teams).fill(0))
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      count.get(vote[i])[i]++
    }
  }
  return [...votes[0]]
    .sort((a, b) => {
      const ca = count.get(a),
        cb = count.get(b)
      for (let i = 0; i < teams; i++) {
        if (ca[i] !== cb[i]) return cb[i] - ca[i]
      }
      return a.charCodeAt(0) - b.charCodeAt(0)
    })
    .join('')
}
