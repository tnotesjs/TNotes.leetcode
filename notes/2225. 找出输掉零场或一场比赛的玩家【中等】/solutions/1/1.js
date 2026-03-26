/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const losses = new Map()
  for (const [winner, loser] of matches) {
    if (!losses.has(winner)) losses.set(winner, 0)
    losses.set(loser, (losses.get(loser) || 0) + 1)
  }
  const noLoss = [],
    oneLoss = []
  for (const [player, cnt] of losses) {
    if (cnt === 0) noLoss.push(player)
    else if (cnt === 1) oneLoss.push(player)
  }
  noLoss.sort((a, b) => a - b)
  oneLoss.sort((a, b) => a - b)
  return [noLoss, oneLoss]
}
