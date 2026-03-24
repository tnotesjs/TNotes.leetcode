/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const rQueue = [],
    dQueue = []
  const n = senate.length
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rQueue.push(i)
    else dQueue.push(i)
  }
  while (rQueue.length && dQueue.length) {
    const r = rQueue.shift(),
      d = dQueue.shift()
    if (r < d) rQueue.push(r + n)
    else dQueue.push(d + n)
  }
  return rQueue.length ? 'Radiant' : 'Dire'
}
