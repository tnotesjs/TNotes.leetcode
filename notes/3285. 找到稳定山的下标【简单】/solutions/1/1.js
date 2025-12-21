/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  const res = []

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      res.push(i)
    }
  }

  return res
}
