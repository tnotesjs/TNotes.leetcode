/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const count = new Array(26).fill(0)
  for (const ch of tiles) count[ch.charCodeAt(0) - 65]++
  let res = 0
  function dfs() {
    for (let i = 0; i < 26; i++) {
      if (count[i] === 0) continue
      res++
      count[i]--
      dfs()
      count[i]++
    }
  }
  dfs()
  return res
}
