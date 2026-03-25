/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b)
  verticalCuts.sort((a, b) => a - b)
  const MOD = 1e9 + 7
  let maxH = horizontalCuts[0]
  for (let i = 1; i < horizontalCuts.length; i++)
    maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1])
  maxH = Math.max(maxH, h - horizontalCuts[horizontalCuts.length - 1])

  let maxW = verticalCuts[0]
  for (let i = 1; i < verticalCuts.length; i++)
    maxW = Math.max(maxW, verticalCuts[i] - verticalCuts[i - 1])
  maxW = Math.max(maxW, w - verticalCuts[verticalCuts.length - 1])

  return Number((BigInt(maxH) * BigInt(maxW)) % BigInt(MOD))
}
