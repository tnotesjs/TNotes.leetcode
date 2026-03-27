/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function(possible) {
  const n = possible.length
  const total = possible.reduce((s, v) => s + (v === 1 ? 1 : -1), 0)
  let alice = 0
  for (let i = 0; i < n - 1; i++) {
    alice += possible[i] === 1 ? 1 : -1
    const bob = total - alice
    if (alice > bob) return i + 1
  }
  return -1
}
