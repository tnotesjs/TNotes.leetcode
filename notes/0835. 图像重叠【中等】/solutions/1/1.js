/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const n = img1.length
  const pts1 = [],
    pts2 = []
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      if (img1[i][j]) pts1.push([i, j])
      if (img2[i][j]) pts2.push([i, j])
    }
  const map = new Map()
  let res = 0
  for (const [r1, c1] of pts1)
    for (const [r2, c2] of pts2) {
      const key = (r1 - r2 + 30) * 61 + (c1 - c2 + 30)
      const cnt = (map.get(key) || 0) + 1
      map.set(key, cnt)
      res = Math.max(res, cnt)
    }
  return res
}
