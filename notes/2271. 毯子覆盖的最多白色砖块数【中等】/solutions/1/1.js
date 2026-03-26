/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0])
  const n = tiles.length
  let res = 0,
    cover = 0,
    j = 0
  for (let i = 0; i < n; i++) {
    while (j < n && tiles[j][1] < tiles[i][0] + carpetLen) {
      cover += tiles[j][1] - tiles[j][0] + 1
      j++
    }
    if (j < n) {
      const partial = Math.max(0, tiles[i][0] + carpetLen - tiles[j][0])
      res = Math.max(res, cover + partial)
    } else {
      res = Math.max(res, cover)
    }
    cover -= tiles[i][1] - tiles[i][0] + 1
  }
  return res
}
