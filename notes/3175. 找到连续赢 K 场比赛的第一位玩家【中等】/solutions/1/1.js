/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
  const n = skills.length
  let winner = 0, wins = 0
  for (let i = 1; i < n; i++) {
    if (skills[i] > skills[winner]) {
      winner = i
      wins = 1
    } else {
      wins++
    }
    if (wins >= k) return winner
  }
  return winner
}
