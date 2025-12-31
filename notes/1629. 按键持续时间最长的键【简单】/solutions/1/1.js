/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {string}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let bestDur = releaseTimes[0]
  let bestKey = keysPressed[0]

  for (let i = 1; i < releaseTimes.length; i++) {
    const dur = releaseTimes[i] - releaseTimes[i - 1]
    const key = keysPressed[i]

    if (dur > bestDur || (dur === bestDur && key > bestKey)) {
      bestDur = dur
      bestKey = key
    }
  }

  return bestKey
}
