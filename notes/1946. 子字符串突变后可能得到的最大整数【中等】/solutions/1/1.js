/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
  const arr = num.split('')
  let started = false
  for (let i = 0; i < arr.length; i++) {
    const d = +arr[i]
    if (change[d] > d) {
      arr[i] = '' + change[d]
      started = true
    } else if (change[d] < d && started) {
      break
    }
  }
  return arr.join('')
}
