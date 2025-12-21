/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
  let maxTime = events[0][1] // 第一个按钮的按下时间就是其时间戳
  let result = events[0][0]

  for (let i = 1; i < events.length; i++) {
    const duration = events[i][1] - events[i - 1][1]
    // 更新最长时间，相同时取下标更小的
    if (duration > maxTime || (duration === maxTime && events[i][0] < result)) {
      maxTime = duration
      result = events[i][0]
    }
  }

  return result
}
