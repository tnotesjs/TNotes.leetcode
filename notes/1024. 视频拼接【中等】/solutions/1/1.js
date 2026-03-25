/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  const maxEnd = new Array(time + 1).fill(0)
  for (const [s, e] of clips) {
    if (s <= time) maxEnd[s] = Math.max(maxEnd[s], e)
  }
  let count = 0
  let curEnd = 0
  let farthest = 0
  for (let i = 0; i < time; i++) {
    farthest = Math.max(farthest, maxEnd[i])
    if (i === curEnd) {
      if (farthest === curEnd) return -1
      count++
      curEnd = farthest
    }
  }
  return count
}
