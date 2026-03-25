/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
  let maxMinutes = -1

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue
      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) continue
        const l = 6 - i - j - k
        const hours = arr[i] * 10 + arr[j]
        const minutes = arr[k] * 10 + arr[l]
        if (hours < 24 && minutes < 60) {
          maxMinutes = Math.max(maxMinutes, hours * 60 + minutes)
        }
      }
    }
  }

  if (maxMinutes === -1) return ''
  const h = Math.floor(maxMinutes / 60)
  const m = maxMinutes % 60
  return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`
}
