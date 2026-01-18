/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let maxDuration = logs[0][1] // 第一个任务从 0 开始
  let resultId = logs[0][0]

  for (let i = 1; i < logs.length; i++) {
    const duration = logs[i][1] - logs[i - 1][1]
    const id = logs[i][0]

    // 如果用时更长，或用时相同但 id 更小，则更新结果
    if (duration > maxDuration || (duration === maxDuration && id < resultId)) {
      maxDuration = duration
      resultId = id
    }
  }

  return resultId
}
