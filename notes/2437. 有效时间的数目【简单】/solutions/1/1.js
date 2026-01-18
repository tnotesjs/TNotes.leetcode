/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  let hourCount = 1
  let minuteCount = 1

  // 计算小时的可能数
  if (time[0] === '?' && time[1] === '?') {
    hourCount = 24 // 00-23
  } else if (time[0] === '?') {
    // 第一位是 ?
    hourCount = time[1] <= '3' ? 3 : 2 // 0-2 或 0-1
  } else if (time[1] === '?') {
    // 第二位是 ?
    hourCount = time[0] === '2' ? 4 : 10 // 20-23 或 00-09/10-19
  }

  // 计算分钟的可能数
  if (time[3] === '?') {
    minuteCount *= 6 // 0-5
  }
  if (time[4] === '?') {
    minuteCount *= 10 // 0-9
  }

  return hourCount * minuteCount
}
