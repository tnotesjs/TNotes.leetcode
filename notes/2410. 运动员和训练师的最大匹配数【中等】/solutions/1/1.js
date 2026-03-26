/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b)
  trainers.sort((a, b) => a - b)
  let i = 0,
    j = 0,
    count = 0
  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      count++
      i++
    }
    j++
  }
  return count
}
