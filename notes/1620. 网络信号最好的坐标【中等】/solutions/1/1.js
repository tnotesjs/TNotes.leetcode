/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  let maxSignal = 0,
    resX = 0,
    resY = 0
  for (let x = 0; x <= 50; x++)
    for (let y = 0; y <= 50; y++) {
      let signal = 0
      for (const [xi, yi, qi] of towers) {
        const d = Math.sqrt((x - xi) ** 2 + (y - yi) ** 2)
        if (d <= radius) signal += Math.floor(qi / (1 + d))
      }
      if (signal > maxSignal) {
        maxSignal = signal
        resX = x
        resY = y
      }
    }
  return [resX, resY]
}
